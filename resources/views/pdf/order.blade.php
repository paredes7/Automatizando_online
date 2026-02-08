<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Orden #{{ $order->id }}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 11pt;
            color: #333333;
            line-height: 1.4;
            padding: 20px;
        }
        
        .header {
            text-align: center;
            margin-bottom: 30px;
            border-bottom: 3px solid #231f20;
            padding-bottom: 15px;
        }
        
        .header h1 {
            color: #231f20;
            font-size: 24pt;
            margin-bottom: 5px;
        }
        
        .header .order-id {
            color: #666666;
            font-size: 12pt;
            margin-top: 5px;
        }
        
        .section {
            margin-bottom: 25px;
        }
        
        .section-title {
            color: #231f20;
            font-size: 13pt;
            font-weight: bold;
            margin-bottom: 10px;
            border-bottom: 2px solid #231f20;
            padding-bottom: 5px;
        }
        
        .customer-info {
            background-color: #f8f8f8;
            padding: 15px;
            border-radius: 5px;
            margin-bottom: 20px;
        }
        
        .customer-info table {
            width: 100%;
        }
        
        .customer-info td {
            padding: 5px 0;
        }
        
        .customer-info td:first-child {
            font-weight: bold;
            width: 150px;
            color: #231f20;
        }
        
        .products-table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 20px;
        }
        
        .products-table thead {
            background-color: #231f20;
            color: white;
        }
        
        .products-table th,
        .products-table td {
            padding: 12px 8px;
            text-align: left;
            border: 1px solid #cccccc;
        }
        
        .products-table th {
            font-weight: bold;
            font-size: 10pt;
        }
        
        .products-table td {
            font-size: 10pt;
        }
        
        .products-table tbody tr:nth-child(even) {
            background-color: #f8f8f8;
        }
        
        .products-table .text-center {
            text-align: center;
        }
        
        .products-table .text-right {
            text-align: right;
        }
        
        .products-table .variant {
            color: #666666;
            font-size: 9pt;
            display: block;
            margin-top: 3px;
        }
        
        .total-section {
            margin-top: 20px;
            text-align: right;
        }
        
        .total-row {
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: 10px;
            padding-top: 10px;
            border-top: 3px solid #231f20;
        }
        
        .total-label {
            font-weight: bold;
            font-size: 14pt;
            color: #231f20;
            margin-right: 20px;
        }
        
        .total-amount {
            font-weight: bold;
            font-size: 16pt;
            color: #231f20;
            min-width: 120px;
        }
        
        .instructions {
            background-color: #f8f8f8;
            padding: 15px;
            border-radius: 5px;
            border-left: 4px solid #231f20;
        }
        
        .instructions ol {
            margin-left: 20px;
        }
        
        .instructions li {
            margin-bottom: 8px;
            line-height: 1.6;
        }
        
        .reference-number {
            background-color: #231f20;
            color: white;
            padding: 3px 8px;
            border-radius: 3px;
            font-weight: bold;
        }
        
        .footer {
            margin-top: 40px;
            text-align: center;
            color: #999999;
            font-size: 9pt;
            border-top: 1px solid #cccccc;
            padding-top: 15px;
        }
    </style>
</head>
<body>
    
    <!-- ENCABEZADO -->
    <div class="header">
        <h1>ORDEN DE: {{ $order->customer_name }}</h1>
        <div class="order-id">Pedido #{{ $order->id }}</div>
    </div>
    
    <!-- INFORMACIÓN DEL CLIENTE -->
    <div class="section">
        <div class="section-title">INFORMACIÓN DEL CLIENTE</div>
        <div class="customer-info">
            <table>
                <tr>
                    <td>Nombre:</td>
                    <td>{{ $order->customer_name }}</td>
                </tr>
                <tr>
                    <td>Email:</td>
                    <td>{{ $order->customer_email ?? 'No proporcionado' }}</td>
                </tr>
                <tr>
                    <td>Teléfono:</td>
                    <td>{{ $order->customer_phone ?? 'No proporcionado' }}</td>
                </tr>
                @if($order->delivery_address)
                <tr>
                    <td>Dirección:</td>
                    <td>{{ $order->delivery_address }}</td>
                </tr>
                @endif
            </table>
        </div>
    </div>
    
    <!-- DETALLE DE PRODUCTOS -->
    <div class="section">
        <div class="section-title">DETALLE DE PRODUCTOS</div>
        <table class="products-table">
            <thead>
                <tr>
                    <th>Producto</th>
                    <th class="text-center" style="width: 80px;">Cant.</th>
                    <th class="text-right" style="width: 100px;">Precio Unit.</th>
                    <th class="text-right" style="width: 100px;">Subtotal</th>
                </tr>
            </thead>
            <tbody>
                @foreach($order->items as $item)
                <tr>
                    <td>
                        {{ $item->product->name }}
                        @if(!empty($item->variant_value))
                            <span class="variant">{{ $item->variant_value }}</span>
                        @endif
                    </td>
                    <td class="text-center">{{ $item->quantity }}</td>
                    <td class="text-right">${{ number_format($item->variant_price, 0) }}</td>
                    <td class="text-right">${{ number_format($item->variant_price * $item->quantity, 0) }}</td>
                </tr>
                @endforeach
            </tbody>
        </table>
    </div>
    
    <!-- TOTAL -->
    <div class="total-section">
        <div class="total-row">
            <span class="total-label">TOTAL A PAGAR:</span>
            <span class="total-amount">${{ number_format($order->total, 0) }}</span>
        </div>
    </div>
     
    <!-- INSTRUCCIONES DE PAGO -->
    <div class="section">
        <div class="section-title">INSTRUCCIONES DE PAGO</div>
        <div class="instructions">
            <ol>
                <li>
                    El cliente debe realizar la transferencia usando como referencia el 
                    <span class="reference-number">#{{ $order->id }}</span>
                </li>
                <li>El cliente debe enviar el comprobante de pago al vendedor</li>
                <li>Procesar el pedido una vez confirmado el pago</li>
            </ol>
        </div>
    </div>
    
    <!-- FOOTER -->
    <div class="footer">
        Documento generado automáticamente por el sistema Maro
    </div>
    
</body>
</html>