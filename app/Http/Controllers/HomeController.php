<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Modelos\TiendasModel;
use App\Modelos\ProductosModel;

class HomeController extends Controller
{
    public function getParametrosHome(Request $request) {
        try {
            $tiendas   = TiendasModel::count();
            $productos = ProductosModel::count();

            $response['tiendas']   = $tiendas;
            $response['productos'] = $productos;

            return ['error' => 0,'info'=> $response];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }
}
