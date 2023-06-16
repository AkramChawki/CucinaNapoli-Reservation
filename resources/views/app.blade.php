<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Cucina Napoli - Un restaurant offrant une panoplie de plats traditionnels de la cuisine italienne. L’endroit
        est
        authentique et l’ambiance chaleureus </title>
    <link rel="canonical" href="https://cucinanapoli.com" />
    <link rel="shortcut icon" type="image/png" href="images/favicon/favicon.webp">
    <meta name="description"
        content="Un restaurant offrant une panoplie de plats traditionnels de la cuisine italienne. L’endroit est authentique et l’ambiance chaleureuse" />

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

    <!-- Scripts -->
    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-sans antialiased">
    @inertia
</body>

</html>
