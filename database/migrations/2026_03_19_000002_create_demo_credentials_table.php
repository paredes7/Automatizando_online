<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('demo_credentials', function (Blueprint $table) {
            $table->id();
            $table->foreignId('demo_project_id')->constrained()->cascadeOnDelete();
            $table->string('rol');
            $table->string('usuario');
            $table->string('password');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('demo_credentials');
    }
};
