const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.styles([
    'resources/plantilla/css/all.min.css',
    'resources/plantilla/css/ionicons.min.css',
    'resources/plantilla/css/adminlte.min.css',
 ], 'public/css/plantilla.css').
 scripts([
    'resources/plantilla/js/jquery.min.js',
    'resources/plantilla/js/bootstrap.bundle.min.js',
    'resources/plantilla/js/adminlte.min.js',
    'resources/plantilla/js/demo.js',
 ], 'public/js/plantilla.js');
