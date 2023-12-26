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

                    <a href="" target="_blank" data-text="RESERVER !!" class="btn">
                        <span>Maitenanat</span>
                    </a>

                </div>
                <div class="col-lg-6">
                    <div class="shapes">
                        <div class="shape-1">
                            <svg id="circle" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300"
                                xml:space="preserve">
                                <circle cx="150" cy="150" r="150"></circle>
                            </svg>
                        </div>
                        <div class="shape-2">
                            <svg id="rect" x="0px" y="0px" width="300px" height="300px" viewBox="0 0 300 300"
                                xml:space="preserve">
                                <rect width="300" height="300" fill="none" stroke="#000000" stroke-width="1px"
                                    stroke-miterlimit="10" />
                            </svg>
                        </div>
                        <div class="shape-3">
                            <svg id="trian" x="0px" y="0px" width="180px" height="180px" viewBox="0 0 180 180"
                                xml:space="preserve">
                                <polygon points="0,0 180,0 90,180" fill="none" stroke-width="1px"
                                    stroke-miterlimit="10" />
                            </svg>
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
