<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Cucina Napoli - Un restaurant offrant une panoplie de plats traditionnels de la cuisine italienne. L’endroit
        est
        authentique et l’ambiance chaleureus </title>
    <link rel="canonical" href="https://cucinanapoli.com" />
    <link rel="shortcut icon" type="image/png" href="images/favicon/favicon.webp">
    <meta name="author" content="Cucina Napoli">
    <meta property="og:locale" content="fr_FR" />
    <meta property="og:site_name"
        content="Cucina Napoli - Un restaurant offrant une panoplie de plats traditionnels de la cuisine italienne. L’endroit est authentique et l’ambiance chaleureuse" />
    <meta property="og:type" content="website" />
    <meta property="og:title"
        content="Cucina Napoli - Un restaurant offrant une panoplie de plats traditionnels de la cuisine italienne. L’endroit est authentique et l’ambiance chaleureuse" />
    <meta property="og:description"
        content="Un restaurant offrant une panoplie de plats traditionnels de la cuisine italienne. L’endroit est authentique et l’ambiance chaleureuse" />
    <meta property="og:url" content="https://www.cucinanapoli.com/" />
    <meta name="Publisher" content="Cucina Napoli">
    <meta name="Identifier-Url" content="cucinanapolicom">
    <meta name="Revisit-After" content="1 day">
    <meta name="Robots" content="all">
    <meta name="Rating" content="general">
    <meta name="Distribution" content="global">
    <meta name="Subject" content="Restaurant Italien">
    <meta name="Copyright" content="Cucina Napoli">
    <meta name="keywords"
        content="restaurant, restaurant casablanca, restaurant mohammedia, restaurant ain diab, restaurant à proximité, restaurant à proximité de ma position, restaurant à casablanca, restaurant à mohammedia,
                                   restaurant casablanca pas cher, restaurants italiens casablanca,restaurant italien casablanca menu, pizza italienne casablanca, cucina pizza, Cucina Napoli, Restaurant Italien, Restaurant Italien à Casablanca, PIZZAS, INSALATA, Burgers, SANDWICH ITALIEN SANDWICH ITALIEN PANUOZZO, PLATS, PASTA, DESSERTS, JUS, BOISSONS, Restaurant 2 mars, restaurant italien, restaurant italien casablanca, restaurant italien dar bouazza, restaurant italien ain diab, restaurant italien à proximité, restaurant italien à casablanca, pizza à emporter restaurant italien, restaurant italien casablanca ain diab, restaurant italien casablanca gauthier, restaurant italien casablanca menu">
    <link rel="shortcut icon" type="image/png" href="images/favicon/favicon.webp">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <meta name="facebook-domain-verification" content="rv23fa8usjjm9ith1ci4x71h1srw6w" />
    <link rel="stylesheet" href="{{ asset('css/normalize.css') }}">
    <link rel="stylesheet" href="{{ asset('css/bootstrap-grid.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <script>
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script',
            'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '1135142881192373');
        fbq('track', 'PageView');
    </script>
    <noscript><img height="1" width="1" style="display:none"
            src="https://www.facebook.com/tr?id=1135142881192373&ev=PageView&noscript=1" /></noscript>
    <!-- End Meta Pixel Code -->
</head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-NPSVK7XBH1"></script>
<script>
    window.dataLayer = window.dataLayer || [];

    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'G-NPSVK7XBH1');
</script>

<body>
    <!-- HEADER SECTION -->
    <header>
        <div class="container">
            <a href="#" id="logo">Cucina Napoli</a>
            <!-- menu btn -->
            <a href="#" id="menu-open">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd" />
                </svg>
            </a>
            <ul class="nav-links">
                <li><a href="https://www.cucinanapoli.com/">Accueil</a></li>
                <li><a href="{{ url('/') }}">Reservation</a></li>
                <li><a href="https://menu.cucinanapoli.com/">Menu</a></li>
                <li><a href="https://www.cucinanapoli.com/contact">Contact</a></li>
                <li><a href="{{ url('/profile') }}">Profile</a></li>
            </ul>
        </div>
    </header>
    <!-- dark mode button -->
    <div class="mode-btn">
        <img src="./img/moon.webp" alt="dark mode button">
    </div>

    <!-- SIDENAV MENU -->
    <div id="sidenav">
        <div id="menu-close">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
        <ul>
            <li><a href="https://www.cucinanapoli.com/">Accueil</a></li>
            <li><a href="{{ url('/') }}">Reservation</a></li>
            <li><a href="https://menu.cucinanapoli.com/">Menu</a></li>
            <li><a href="https://www.cucinanapoli.com/contact">Contact</a></li>
            <li><a href="{{ url('/profile') }}">Profile</a></li>
        </ul>
    </div>

    <!-- SHOWCASES SECTION -->
    @yield('content')
    <!-- FOOTER SECTION -->
    <footer>
        <svg x="0px" y="0px" width="780px" height="780px" viewBox="0 0 780 780" xml:space="preserve">
            <circle fill="none" stroke="#000000" stroke-width="1px" stroke-miterlimit="10" cx="390"
                cy="390" r="390"></circle>
        </svg>
        <div class="container">
            <div class="row">
                <div class="col-md-8 mx-auto">
                    <ul>
                        <li><a href="https://www.cucinanapoli.com/">Accueil</a></li>
                        <li><a href="{{ url('/') }}">Reservation</a></li>
                        <li><a href="https://menu.cucinanapoli.com/">Menu</a></li>
                        <li><a href="https://www.cucinanapoli.com/contact">Contact</a></li>
                        <li><a href="{{ url('/profile') }}">Profile</a></li>
                    </ul>
                    <hr>
                    <p>You've tried the rest, now try the best !!</p>
                    <a href="#">&copy; Cucina Napoli - 2024.</a>
                </div>
            </div>
        </div>
    </footer>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
        integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=="
        crossorigin="anonymous"></script>
    <script src="{{ asset('js/animation.js') }}"></script>
    <script src="{{ asset('js/app.js') }}"></script>
</body>

</html>
