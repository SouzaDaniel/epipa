<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGuestsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('guests', function (Blueprint $table) {
      $table->id();
      $table->date('entried_at');
      $table->date('exited_at')->nullable();
      $table->string('email', 64);
      $table->string('cpf', 16);
      $table->string('phone_number', 16);
      $table->boolean('accepted_terms');
      $table->integer('user_id')->nullable();
      $table->integer('type_id')->nullable();
      $table->foreign('user_id')->references('id')->on('users')->onDelete('SET NULL')->onUpdate('CASCADE');
      $table->foreign('type_id')->references('id')->on('types')->onDelete('SET NULL')->onUpdate('CASCADE');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('guests');
  }
}
