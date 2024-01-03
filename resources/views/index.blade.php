@extends('layout.master')

@section('content')
    <section id="showcase">
        <div class="container">
            <div class="row">
                <div class="col-lg-6">
                    <div class="content">
                        <h1>Cucina Napoli</h1>
                        <p>LA VERA PIZZA NAPOLETANA <b>&middot;</b> PIZZA AU FEU DE BOIS</p>
                    </div>

                    <a href="{{ url('/restaurants') }}" data-text="RESERVER !!" class="btn"
                        style="background-color: #166534;">
                        <span>Maitenanat</span>
                    </a>

                </div>
                <div class="col-lg-6">
                    <div class="shapes">
                        <div class="shape-1">
                            <img src="{{ asset('images/home/img1.png') }}" id="circle" x="0px" y="0px" width="400px"
                                height="300px" viewBox="0 0 300 300" xml:space="preserve">
                        </div>
                        <div class="shape-2">
                            <img src="{{ asset('images/home/img2.png') }}" id="rect" x="0px" y="0px" width="300px"
                                height="300px" viewBox="0 0 300 300" xml:space="preserve">
                        </div>
                        <div class="shape-3">
                            <img src="{{ asset('images/home/img3.png') }}" id="trian" x="0px" y="0px" width="300px"
                                height="400px" viewBox="0 0 300 300" xml:space="preserve">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="vertical_text">
            <p>Scroll down</p>
        </div>
    </section>
    <div class="section-title title-1">
        <div>LA VERA PIZZA NAPOLETANA</div>
    </div>
@endsection
