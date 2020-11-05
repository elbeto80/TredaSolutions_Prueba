<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Modelos\TiendasModel;

class TiendasController extends Controller
{
    public function getTiendas(Request $request) {
        try {
            // dd( $request->session()->all() );
            // $values = $request->input();
            $tienda = new TiendasModel();
            $TI = $tienda->getTable();

            $tiendas = $tienda->select("$TI.id","$TI.nombre", "$TI.fecha_apertura")
            // ->where("$TI.DANE",session('dane'))
            ->orderBy("$TI.id")
            ->get();

            $response = [
                'tiendas'=> $tiendas
            ];

            return ['error' => 0, 'msj' => $response];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'msj'=> (string)$e];
        }
    }
}
