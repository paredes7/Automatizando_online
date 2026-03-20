<?php

namespace App\Http\Controllers;

use App\Models\DemoProject;
use Inertia\Inertia;

class DemoController extends Controller
{
    public function index()
    {
        $projects = DemoProject::with('credentials')->get();

        return Inertia::render('Demos', [
            'projects' => $projects,
        ]);
    }
}
