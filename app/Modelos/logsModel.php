<?php

namespace App\Modelos;

use Illuminate\Database\Eloquent\Model;

class logsModel extends Model
{
    protected $table = 'logs';
    protected $fillable = ['accion'];
}
