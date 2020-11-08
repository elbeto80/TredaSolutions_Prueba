<?php

Route::get('/', function () {
    return view('comun/contenido');
});

Route::get('/getTiendas', 'TiendasController@getTiendas');
Route::post('/tiendas/save', 'TiendasController@guardarTienda');
Route::post('/tiendas/delete', 'TiendasController@eliminarTienda');
