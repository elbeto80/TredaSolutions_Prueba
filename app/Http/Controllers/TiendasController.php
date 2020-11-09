<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Modelos\TiendasModel;
use App\Modelos\ProductosModel;
use App\Http\Controllers\logsController;

use \Validator;
use \Exception;
use \DB;

class TiendasController extends Controller
{

    public function getProductosTienda(Request $request) {
        try {
            $values = $request->input();
            
            $productos = ProductosModel::where('tienda',$values['idTienda'])->get()->toArray();

            foreach ($productos as $key => $info) {
                $productos[$key]['imagenbi'] = base64_encode($info['imagenbi']);
            }

            $response = [
                'productos'=> $productos
            ];

            // // Registro del logs
            $log = new logsController();
            $respLog = $log->logsFuntion('Consulta productos de tienda id ' . $values['idTienda']);

            return ['error' => 0, 'info' => $response];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }

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

            // Registro del logs
            $log = new logsController();
            $respLog = $log->logsFuntion('Consulta de tiendas');

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
                $infoLog = 'Guardada nueva tienda ';
            } else {
                $tienda = TiendasModel::findOrFail($values['idTienda']);
                $infoLog = 'Editada tienda ';
            }
            $tienda->nombre         = $values['nombreTienda'];
            $tienda->fecha_apertura = $values['fecha_apertura'];

            if(!$tienda->save()){
                DB::rollback();
                return ['error' => 1, 'info' => 'No ha sido posible Guardar tienda.'];
            }

            // Registro del logs
            $log = new logsController();
            $respLog = $log->logsFuntion($infoLog . '(' . $values['nombreTienda'] . ' ID ' . $tienda->id . ')');

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

            // Registro del logs
            $log = new logsController();
            $respLog = $log->logsFuntion('Eliminada tienda (' . $tienda->nombre . ' ID ' . $tienda->id . ')');

            return ['error' => 0, 'info' => 'Tienda borrada correctamente'];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }
}
