<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateContractsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('contracts', function (Blueprint $table) {
      $table->id();
      $table->date('partnership_at');
      $table->integer('partner_id')->nullable();
      $table->foreign('partner_id')->references('id')->on('partners')->onUpdate('CASCADE')->onDelete('CASCADE');
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
    Schema::dropIfExists('contracts');
  }
}
