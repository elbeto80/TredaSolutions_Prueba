const mix = require('laravel-mix');

mix.styles([
    'resources/plantilla/css/all.min.css',
    'resources/plantilla/css/ionicons.min.css',
    'resources/plantilla/css/adminlte.min.css',
    'resources/plantilla/css/style.css',
 ], 'public/css/plantilla.css').
 scripts([
    'resources/plantilla/js/jquery.min.js',
    // 'resources/plantilla/js/bootstrap.bundle.min.js',
    'resources/plantilla/js/moment.min.js',
   'resources/plantilla/js/es.js',
    'resources/plantilla/js/adminlte.min.js',
    'resources/plantilla/js/demo.js',
    'resources/plantilla/js/sweetalert.min.js',
    'resources/plantilla/js/main.js',
 ], 'public/js/plantilla.js').
 js(['resources/js/app.js'], 'public/js/app.js').
 version();