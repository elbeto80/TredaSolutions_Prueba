<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Modelos\TiendasModel;

use \Validator;
use \Exception;
use \DB;

class TiendasController extends Controller
{
    public function getTiendas(Request $request) {
        try {
            $values = $request->input();

            $tienda = new TiendasModel();
            $TI = $tienda->getTable();

            $tiendas = $tienda->select("$TI.id","$TI.nombre", "$TI.fecha_apertura")
            ->where(function($query) use ($values, $TI) {
                if(!empty($values['campoBuscar'])) {
                    $query->orWhere("$TI.nombre", 'like', "%".$values['campoBuscar']."%");
                }
            })
            ->orderBy("$TI.nombre")
            ->get();

            $response = [
                'tiendas'=> $tiendas
            ];

            return ['error' => 0, 'info' => $response];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }

    public function guardarTienda(Request $request) {
        try {
            $values = $request->input();

            // VALIDACIONES DE CAMPOS OBLIGATORIOS POR LARAVEL
            $rules = [
                'nombreTienda'   => 'required|max:255',
                'fecha_apertura' => 'date',
            ];
            $input = [
                'nombreTienda'   => $values['nombreTienda'],
                'fecha_apertura' => $values['fecha_apertura'],
            ];

            $validate = Validator::make($input, $rules);
            if($validate->fails()){
                $messages = $validate->messages()->all();
                return ['error' => 1, 'info'   => $messages];
            }

            // SI TRAE idTienda MODIFICA SINO CREA NUEVO
            if( !$values['idTienda'] ){
                $tienda = new TiendasModel();
            } else {
                $tienda = TiendasModel::findOrFail($values['idTienda']);
            }
            $tienda->nombre         = $values['nombreTienda'];
            $tienda->fecha_apertura = $values['fecha_apertura'];

            if(!$tienda->save()){
                DB::rollback();
                return ['error' => 1, 'info'   => 'No ha sido posible Guardar tienda.'];
            }

            return ['error' => 0,'info'   => 'Tienda guardada correctamente'];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }

    public function eliminarTienda(Request $request) {
        try {
            $tienda = TiendasModel::findOrFail($request->idTienda);
            if(!$tienda->delete()){
                DB::rollback();
                return ['error' => 1, 'info' => 'No ha sido posible eliminar tienda.'];
            }
            return ['error' => 0, 'info' => 'Tienda borrada correctamente'];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }
}
