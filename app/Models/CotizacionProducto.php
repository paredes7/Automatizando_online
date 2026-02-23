<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CotizacionProducto extends Pivot
{
    protected $table = 'cotizacion_product';

    protected $casts = [
        'precio_unitario' => 'decimal:2',
        'subtotal' => 'decimal:2',
        'cantidad' => 'integer',
    ];
}
