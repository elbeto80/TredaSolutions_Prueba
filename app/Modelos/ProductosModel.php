<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class ProductosModel extends Model
{
    protected $table = 'productos';
    protected $fillable = ['nombre','sku','descripcion','valor','tienda'];
}
