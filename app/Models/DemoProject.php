<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DemoProject extends Model
{
    protected $fillable = [
        'name',
        'description',
        'url_directa',
    ];

    public function credentials()
    {
        return $this->hasMany(DemoCredential::class);
    }
}
