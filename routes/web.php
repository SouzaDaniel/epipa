<?php

use App\Http\Controllers\PartnerController;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Password;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware('guest')->group(function () {
  Route::post('/forgot-password', function (Request $request) {
    $request->validate(['email' => 'required|email']);

    $status = Password::sendResetLink(
      $request->only('email')
    );

    return $status === Password::RESET_LINK_SENT
      ? back()->withErrors(['success' => __($status)])
      : back()->withErrors(['email' => __($status)]);
  })->name('password.email');

  Route::get('/register-user', function () {
    return Inertia::render('Auth/RegisterUser');
  })->name('register.user');

  Route::get('/register-partner', [PartnerController::class, 'create'])->name('register.partner');
  Route::post('/register-partner', [PartnerController::class, 'store']);
});

Route::middleware(['auth:sanctum', 'verified'])->group(function () {
  Route::inertia('/', 'Dashboard')->name('home');
});

// Route::middleware()->get('/dashboard', function () {
//   return Inertia::render('Dashboard');
// })->name('dashboard');
