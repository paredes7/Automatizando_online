<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Cotizacion extends Model
{
  // Laravel busca la tabla en plural, si tu tabla se llama exactamente 'cotizaciones'
  protected $table = "cotizaciones";

  protected $fillable = [
    "fecha_cotizacion",
    "link_formulario", // El campo que pediste para editar
    "cliente_name",
    "total",
    "estado",
  ];

  protected $casts = [
    "fecha_cotizacion" => "date",
    "total" => "decimal:2",
  ];

  /**
   * Relación con Productos (Muchos a Muchos)
   * Accede a los productos incluidos en esta proforma
   */
  public function productos(): BelongsToMany
  {
    return $this->belongsToMany(Product::class, "cotizacion_product")
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
