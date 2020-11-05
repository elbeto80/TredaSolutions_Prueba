<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class TiendasModel extends Model
{
    
    protected $table = 'tienda';
    protected $fillable = ['nombre','fecha_apertura'];
}
