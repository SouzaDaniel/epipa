<?php

namespace App\Providers;

use App\Actions\Fortify\CreateNewUser;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;
use Laravel\Fortify\Contracts\LoginResponse;
use Laravel\Fortify\Contracts\LogoutResponse;
use Laravel\Fortify\Contracts\RegisterResponse;
use Laravel\Fortify\Contracts\RequestPasswordResetLinkViewResponse;
use Laravel\Fortify\Fortify;

class FortifyServiceProvider extends ServiceProvider
{
  /**
   * Register any application services.
   *
   * @return void
   */
  public function register()
  {
    $this->app->instance(LogoutResponse::class, new class implements LogoutResponse
    {
      public function toResponse($request)
      {
        return redirect()->route('login');
      }
    });
    $this->app->instance(LoginResponse::class, new class implements LoginResponse
    {
      public function toResponse($request)
      {
        return redirect()->route('home');
      }
    });
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot()
  {
    Fortify::createUsersUsing(CreateNewUser::class);
    Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
    Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
    Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

    Fortify::verifyEmailView(function () {
      return Inertia::render('Auth/ConfirmEmail');
    });
    Fortify::requestPasswordResetLinkView(function () {
      return Inertia::render('Auth/ForgotPassword');
    });
    Fortify::registerView(function () {
      return Inertia::render('Auth/Register');
    });
    Fortify::resetPasswordView(function () {
      return Inertia::render('Auth/ResetPassword');
    });

    RateLimiter::for('login', function (Request $request) {
      return Limit::perMinute(600)->by($request->email . $request->ip());
    });
    RateLimiter::for('verification', function (Request $request) {
      return Limit::perMinute(600)->by($request->email . $request->ip());
    });
    RateLimiter::for('two-factor', function (Request $request) {
      return Limit::perMinute(5)->by($request->session()->get('login.id'));
    });
  }
}
