<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;

class SocialLoginController extends Controller
{
    // Redirige a Google
    public function redirectToGoogle()
    {
        return Socialite::driver('google')
            ->with(['prompt' => 'select_account'])
            ->redirect();
    }

    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->stateless()->user(); // evita InvalidStateException

        $user = User::firstOrCreate( //si no existe lo crea
            ['email' => $googleUser->getEmail()],
            [
                'name' => $googleUser->getName(),
                'password' => bcrypt(str()->random(16)),
            ]
        );

        Auth::login($user);

        return redirect()->route('welcome');
    }
}
