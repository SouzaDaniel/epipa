<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use App\Models\Partner;

class Contract extends Model
{
  use HasFactory;

  public function partner()
  {
    return $this->belongsTo(Partner::class);
  }
}
