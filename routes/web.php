<?php

Route::get('/', function () {
    return view('comun/contenido');
});

Route::get('/getTiendas', 'TiendasController@getTiendas');
Route::post('/tiendas/save', 'TiendasController@guardarTienda');
Route::post('/tiendas/delete', 'TiendasController@eliminarTienda');

Route::get('/getParametrosHome', 'HomeController@getParametrosHome');

Route::get('/getProductos', 'ProductosController@getProductos');
Route::get('/getParametrosProd', 'ProductosController@getParametrosProd');
Route::post('/producto/save', 'ProductosController@guardarProducto');
Route::post('/producto/delete', 'ProductosController@eliminarProducto');