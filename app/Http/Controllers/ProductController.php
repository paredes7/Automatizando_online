<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Cotizacion;
use App\Models\CotizacionProducto;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Validation\Rules\In;

class ProductController extends Controller
{
  /**
   * Muestra la página de inicio con las categorías y productos disponibles.
   * Permite buscar productos por nombre y paginar los resultados.
   */
  public function index(Request $request)
  {
    $search = $request->query("search", "");
    $perPage = $request->query("per_page", 5); // Por defecto 5 categorías por página

    $categories = Category::with([
      "products" => function ($query) use ($search) {
        $query
          ->where("available", 1)
          ->when($search, fn($q) => $q->where("name", "like", "%$search%"))
          ->with(["multimedia" => fn($m) => $m->orderBy("sort_order", "asc")]);
      },
    ])
      ->whereHas("products", function ($query) use ($search) {
        // Solo traemos categorías que tengan productos que coincidan con la búsqueda
        $query
          ->where("available", 1)
          ->when($search, fn($q) => $q->where("name", "like", "%$search%"));
      })
      ->paginate($perPage)
      ->withQueryString(); // Mantiene el parámetro 'search' al cambiar de página

    return Inertia::render("Nosotros", [
      "auth" => [
        "user" => Auth::check()
          ? [
            "id" => Auth::user()->id,
            "name" => Auth::user()->name,
            "email" => Auth::user()->email,
          ]
          : null,
      ],
      "categories" => $categories, // Ahora es un objeto LengthAwarePaginator
      "filters" => [
        "search" => $search,
      ],
    ]);
  }

  /**
   * funcion que me muestra todos los productos de todas las categorias con su multimedia
   */
  public function getAllProducts(Request $request)
  {
    $perPage = $request->query("per_page", 12);

    $query = Product::where("available", 1);
    $query = $this->applyFilters($query, $request);

    $products = $query
      ->with([
        "multimedia" => function ($query) {
          $query->orderBy("sort_order", "asc");
        },
        "category:id,name",
      ])
      ->paginate($perPage)
      ->withQueryString();


    return Inertia::render("Tienda", [
      "products" => $products,
      "filters" => [
        "search" => $request->query("search", ""),
        "sort" => $request->query("sort", "latest"), // ¡Agrega esto!
        "min_price" => $request->query("min_price", ""),
        "max_price" => $request->query("max_price", ""),
      ],
    ]);
  }

  public function getAllProductsJson(Request $request)
{
    $perPage = $request->query("per_page", 12);
    
    // Aplicamos los filtros de búsqueda y orden que ya programamos
    $query = Product::where("available", 1);
    $query = $this->applyFilters($query, $request);

    $products = $query->with(['multimedia', 'category:id,name'])
        ->paginate($perPage)
        ->withQueryString();

    // Importante: Devolver siempre response()->json() en esta ruta específica
    return response()->json($products);
}

  /**
   * metodo aparte para manejar la logica de busqueda y filtrado
   */
  private function applyFilters($query, $request)
  {
    $search = $request->query("search");

    $sort = $request->query("sort", "latest"); // valor por defecto 'latest'

    $query
      ->when($search, function ($q) use ($search) {
        $q->where(function ($sub) use ($search) {
          $sub
            ->where("name", "like", "%{$search}%")

            ->orWhereHas("category", function ($catQuery) use ($search) {
              $catQuery->where("name", "like", "%{$search}%");
            });

          if (is_numeric($search)) {
            $sub->orWhere("price", "<=", $search);
          }
        });
      })

      ->when($request->query("min_price"), function ($q, $min) {
        $q->where("price", ">=", $min);
      })
      ->when($request->query("max_price"), function ($q, $max) {
        $q->where("price", "<=", $max);
      });

    switch ($sort) {
      case "name_asc":
        return $query->orderBy("name", "asc");
        break;
      case "name_desc":
        return $query->orderBy("name", "desc");
        break;
      case "price_asc":
        return $query->orderBy("price", "asc");
        break;
      case "price_desc":
        return $query->orderBy("price", "desc");
        break;
      case "oldest":
        return $query->orderBy("created_at", "asc");
        break;
      default:
        return $query->orderBy("created_at", "desc");
        break;
    }

    return $query;
  }

  public function show($slug, $id)
  {
    $product = Product::where("available", 1)
      ->with(["variants.values.attribute", "multimedia"])
      ->findOrFail($id);

    return Inertia::render("Products/ShowProduct", [
      "product" => [
        "id" => $product->id,
        "name" => $product->name,
        "description" => $product->description,
        "price" => $product->price,
        "multimedia" => $product->multimedia->map(
          fn($m) => [
            "id" => $m->id,
            "url" => $m->url,
            "type" => $m->type ?? "image", // opcional (image / video)
          ]
        ),
        "variants" => $product->variants->map(
          fn($v) => [
            "id" => $v->id,
            "stock" => $v->stock,
            "sku" => $v->sku,
            "price" => $v->price,
            "values" => $v->values->map(
              fn($val) => [
                "attribute" => $val->attribute->name,
                "value" => $val->value,
              ]
            ),
          ]
        ),
      ],
    ]);
  }

  public function getCategoriasJson(Request $request)
  {
    $search = $request->query("search", "");
    $offset = (int) $request->query("offset", 0); // cuántas categorías ya se mostraron
    $perPage = 2; //  cantidad de categoría por “ver más”

    $allCategories = Category::whereNull("parent_id")
      ->with([
        "children",
        "children.products",
        "products.variants.values.attribute",
        "products.multimedia",
      ])
      ->get()
      ->map(function ($category) use ($search) {
        $categoryProducts = $category
          ->products()
          ->where("available", 1)
          ->when($search, fn($q) => $q->where("name", "like", "%$search%"))
          ->with(["variants.values.attribute", "multimedia"])
          ->get();

        $children = $category->children->map(function ($child) use ($search) {
          $childProducts = $child
            ->products()
            ->where("available", 1)
            ->when($search, fn($q) => $q->where("name", "like", "%$search%"))
            ->with(["variants.values.attribute", "multimedia"])
            ->get();

          return [
            "id" => $child->id,
            "name" => $child->name,
            "products" => $childProducts,
          ];
        });

        return [
          "id" => $category->id,
          "name" => $category->name,
          "products" => $categoryProducts,
          "children" => $children,
        ];
      });

    // Aquí usamos offset en lugar de page
    $categories = $allCategories->slice($offset, $perPage)->values()->all();
    $hasMore = $allCategories->count() > $offset + $perPage;

    return response()->json([
      "categories" => $categories,
      "hasMore" => $hasMore,
    ]);
  }
}
