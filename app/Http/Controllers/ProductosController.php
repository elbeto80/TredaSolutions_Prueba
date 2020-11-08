<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Modelos\ProductosModel;
use App\Modelos\TiendasModel;
use App\Http\Controllers\logsController;

use \Validator;
use \Exception;
use \DB;

class ProductosController extends Controller
{
    public function getParametrosProd(Request $request) {
        try {
            $tiendas   = TiendasModel::select("id", "nombre")->get();

            $response['tiendas']   = $tiendas;

            // Registro del logs
            $log = new logsController();
            $respLog = $log->logsFuntion('Consulta parametros para producto');

            return ['error' => 0,'info'=> $response];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }

    public function getProductos(Request $request) {
        try {
            $values = $request->input();

            $producto = new ProductosModel();
            $tienda   = new TiendasModel();
            $PR = $producto->getTable();
            $TI = $tienda->getTable();

            $productos = $producto->select("$PR.id","$PR.nombre", "$PR.sku", "$PR.descripcion", "$PR.valor", "$PR.tienda", "$PR.imagen", "$TI.nombre as nombretienda")
            ->join("$TI", "$PR.tienda", "$TI.id")
            ->where(function($query) use ($values, $PR) {
                if(!empty($values['campoBuscar'])) {
                    $query->orWhere("$PR.nombre", 'like', "%".$values['campoBuscar']."%");
                }
            })
            ->orderBy("$PR.nombre")
            ->get();

            $response = [
                'productos'=> $productos
            ];

            // Registro del logs
            $log = new logsController();
            $respLog = $log->logsFuntion('Consulta de productos');

            return ['error' => 0, 'info' => $response];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }

    public function guardarProducto(Request $request) {
        try {
            $values = $request->input();
        
            if( !$values['idProducto'] ){
                $existe   = ProductosModel::where('sku',$values['sku'])->first();
                if ( $existe ) {
                    return ['error' => 1, 'info' => 'SKU de producto ya existe'];
                }
            }
            
            if (!preg_match('/^\d+$/', intval($values['valor']))) {
                return ['error' => 1, 'info' => 'Valor deber ser numero'];
            }

            // VALIDACIONES DE CAMPOS OBLIGATORIOS POR LARAVEL
            $rules = [
                'nombreProducto'   => 'required|max:255',
                'sku'              => 'required|max:255',
                // 'imagen'           => 'required',
                'descripcion'      => 'required',
                'valor'            => 'numeric',
                'tienda'           => 'required',
            ];
            $input = [
                'nombreProducto'   => $values['nombreProducto'],
                'sku'              => $values['sku'],
                // 'imagen'           => $extension,
                'descripcion'      => $values['descripcion'],
                'valor'            => $values['valor'],
                'tienda'           => $values['tienda'],
            ];

            $validate = Validator::make($input, $rules);
            if($validate->fails()){
                $messages = $validate->messages()->all();
                return ['error' => 1, 'info'   => $messages];
            }

            $ruta = '';
            if( $_FILES ){
                $extension = explode(".", $_FILES["file"]["name"]);
                $extension = end( $extension );
                if ( $extension == 'jpg' || $extension == 'jpeg' || $extension == 'png' || $extension == 'gif' || $extension == 'bmp' ) {
                    if ( !file_exists("images/") ) {
                        mkdir("images/", 0777, true);
                    }

                    if ( !move_uploaded_file($_FILES["file"]["tmp_name"], "images/". date("His") .".".$extension ) ) {
                        return ['error' => 1, 'info' => 'Error copiando Imagen'];
                    }

                    $ruta = "images/". date("His") .".".$extension;
                } else {
                    return ['error' => 1, 'info' => 'Formato de Archivo Incorrecto'];
                }
            }

            // SI TRAE idProducto MODIFICA SINO CREA NUEVO
            if( !$values['idProducto'] ){
                $producto = new ProductosModel();
                $infoLog = 'Guardado nuevo producto ';
            } else {
                $producto = ProductosModel::findOrFail($values['idProducto']);
                $infoLog = 'Editado producto ';
            }
            $producto->nombre      = $values['nombreProducto'];
            $producto->sku         = $values['sku'];
            $producto->descripcion = $values['descripcion'];
            $producto->valor       = $values['valor'];
            $producto->tienda      = $values['tienda'];
            $producto->sku         = $values['sku'];
            $producto->imagen      = ($ruta ? $ruta : $producto['imagen']);

            if(!$producto->save()){
                DB::rollback();
                return ['error' => 1, 'info' => 'No ha sido posible guardar producto.'];
            }

            // Registro del logs
            $log = new logsController();
            $respLog = $log->logsFuntion($infoLog . '(' . $values['nombreProducto'] . ' ID ' . $producto->id . ')');

            return ['error' => 0,'info'   => 'Producto guardado correctamente'];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }

    public function eliminarProducto(Request $request) {
        try {
            $producto = ProductosModel::findOrFail($request->idProducto);
            if(!$producto->delete()){
                DB::rollback();
                return ['error' => 1, 'info' => 'No ha sido posible eliminar producto.'];
            }

            // Registro del logs
            $log = new logsController();
            $respLog = $log->logsFuntion('Eliminada tienda (' . $producto->nombre . ' ID ' . $producto->id . ')');

            return ['error' => 0, 'info' => 'Producto borrada correctamente'];
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }
}
