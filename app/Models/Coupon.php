<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Partner;

class Coupon extends Model
{
  use HasFactory;

  public function partner()
  {
    return $this->belongsTo(Partner::class);
  }
}
