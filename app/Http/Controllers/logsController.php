<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Modelos\logsModel;

use \Exception;
use \DB;

class logsController extends Controller
{
    public function logsFuntion($accion) {
        try {
            $log = new logsModel();
            $log->accion = $accion;
            if(!$log->save()){
                DB::rollback();
                return ['error' => 1, 'info' => 'Error ragistrando log'];
            }
        } catch(Exception $e) {
            error_log($e,0);
            return ['error' => 1,'info'=> (string)$e];
        }
    }
}
