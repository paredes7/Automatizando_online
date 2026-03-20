<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DemoCredential extends Model
{
    protected $fillable = [
        'demo_project_id',
        'rol',
        'usuario',
        'password',
    ];

    public function project()
    {
        return $this->belongsTo(DemoProject::class);
    }
}
