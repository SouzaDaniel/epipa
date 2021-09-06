<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;

class AuthServiceProvider extends ServiceProvider
{
  /**
   * The policy mappings for the application.
   *
   * @var array
   */
  protected $policies = [
    // 'App\Models\Model' => 'App\Policies\ModelPolicy',
  ];

  /**
   * Register any authentication / authorization services.
   *
   * @return void
   */
  public function boot()
  {
    $this->registerPolicies();

    VerifyEmail::toMailUsing(function ($notifiable, $url) {
      return (new MailMessage)
        ->greeting('Olá')
        ->subject('Verifique o endereço de email')
        ->line('Por favor, clique no botão para verificar seu email.')
        ->action('Verificar endereço de email', $url)
        ->salutation(config('app.name'));
    });
  }
}
