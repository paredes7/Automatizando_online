<?php

namespace Database\Seeders;

use App\Models\DemoProject;
use App\Models\DemoCredential;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DemoProjectSeeder extends Seeder
{
    use WithoutModelEvents;

    public function run(): void
    {
        // Proyecto 1: E-Commerce con múltiples roles
        $ecommerce = DemoProject::create([
            'name'        => 'E-Commerce Demo',
            'description' => 'Tienda online con gestión de productos, pedidos y reportes de ventas.',
            'url_directa' => 'https://automatizando.vip',
        ]);

        DemoCredential::create([
            'demo_project_id' => $ecommerce->id,
            'rol'             => 'Administrador',
            'usuario'         => 'admin@demo.com',
            'password'        => 'admin123',
        ]);

        DemoCredential::create([
            'demo_project_id' => $ecommerce->id,
            'rol'             => 'Cliente',
            'usuario'         => 'cliente@demo.com',
            'password'        => 'cliente123',
        ]);

        // Proyecto 2: Sistema de gestión con un solo rol
        $crm = DemoProject::create([
            'name'        => 'CRM Automatizado',
            'description' => 'Sistema de gestión de clientes con seguimiento de leads y automatización de tareas.',
            'url_directa' => 'https://automatizando.vip',
        ]);

        DemoCredential::create([
            'demo_project_id' => $crm->id,
            'rol'             => 'Administrador',
            'usuario'         => 'admin@crm.com',
            'password'        => 'crm2024',
        ]);
    }
}
