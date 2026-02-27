<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" translate="no">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title inertia>{{ config('app.name', 'Automatizando') }}</title>

    <link rel="icon" href="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1772163185/Captura_de_pantalla_2026-02-21_114520-removebg-preview_rlvuye.png" type="image/png">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&family=Figtree:wght@400;500;600&display=swap" rel="stylesheet">

    <meta property="og:title" content="Automatizando | Soluciones Digitales" />
    <meta property="og:description" content="Impulsa tu negocio con soluciones digitales efectivas, desarrollo web y automatización." />
    <meta property="og:image" content="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1772163185/Captura_de_pantalla_2026-02-21_114520-removebg-preview_rlvuye.png" />
    <meta property="og:url" content="{{ url('/') }}" />
    <meta property="og:type" content="website" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Automatizando" />
    <meta name="twitter:description" content="Diseñamos webs que venden y estrategias que convierten." />
    <meta name="twitter:image" content="https://res.cloudinary.com/dcyx3nqj5/image/upload/v1772163185/Captura_de_pantalla_2026-02-21_114520-removebg-preview_rlvuye.png" />

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>
<body class="font-sans antialiased bg-[#0a0a0a]">
    @inertia
</body>
</html>