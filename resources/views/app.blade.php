<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel SPA</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" rel="stylesheet">
        
        <!-- css -->
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        </head>
    <body>
    <div id="app">
        <app-header class="mb-3"></app-header>
        <router-view></router-view>
    </div>
        <script src="{{ asset('js/app.js') }}"></script>
    </body>
</html>
