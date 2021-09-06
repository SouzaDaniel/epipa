<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePartnersTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('partners', function (Blueprint $table) {
      $table->increments('id');
      $table->string('name', 64);
      $table->integer('user_id')->nullable();
      $table->foreign('user_id')->references('id')->on('users')->onUpdate('CASCADE')->onDelete('SET NULL');
      $table->boolean('active')->default(true);
      $table->string('responsible_name', 64);
      $table->string('responsible_phone', 16)->nullable();
      $table->string('addres', 256)->nullable();
      $table->string('latitude', 32)->nullable();
      $table->string('longitude', 32)->nullable();
      $table->string('service_type', 64);
      $table->time('time_start_work')->nullable();
      $table->time('time_end_work')->nullable();
      $table->string('close_days', 128)->nullable();
      $table->boolean('has_delivery')->nullable();
      $table->string('phone_number', 16);
      $table->integer('discount')->nullable();
      $table->boolean('accepted_terms');
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
    Schema::dropIfExists('partners');
  }
}
