<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>@yield('titulo_pagina')</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link rel="stylesheet" href="{{ mix('css/plantilla.css') }}">
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700" rel="stylesheet">

        <meta name="csrf-token" content="{{ csrf_token() }}">
        <script src="https://cdn.jsdelivr.net/npm/sweetalert2@9"></script>
    </head>
    
    <body class="hold-transition sidebar-mini">
        <div id="app">
            <div class="wrapper">
    
                @include('comun/cabecera')

                @include('comun/menu_izquierda')

                
                @yield('contenido')

                @include('comun/pie_pagina')

            </div>
        </div>
    </body>

    <!-- Todos los js integrados y compliados con webpack -->
    <script src="{{ mix('js/plantilla.js') }}"></script>
    <script src="{{ mix('js/app.js') }}"></script>
</html>
