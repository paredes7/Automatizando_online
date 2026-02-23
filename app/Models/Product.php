<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Product extends Model
{
  protected $fillable = [
    "category_id",
    "name",
    "description",
    "price",
    "link",
    "available",
  ];

  /**
   * Relación con la Categoría (Web, Automatización, Trading)
   */
  public function category()
  {
    return $this->belongsTo(Category::class);
  }

  /**
   * Relación con Multimedia (Imágenes/Videos de Cloudinary)
   */
  public function multimedia()
  {
    return $this->hasMany(ProductMultimedia::class);
  }

  /**
   * Relación con Cotizaciones (Muchos a Muchos)
   * Permite acceder a los datos de la proforma desde el producto
   */
  public function cotizaciones(): BelongsToMany
  {
    return $this->belongsToMany(Cotizacion::class, "cotizacion_product")
    ->using(CotizacionProducto::class) // Especifica el modelo pivot personalizado
      ->withPivot(
        "cantidad",
        "precio_unitario",
        "subtotal",
        "notas_adicionales"
      )
      ->withTimestamps();
  }
}
