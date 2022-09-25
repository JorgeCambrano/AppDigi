import React from "react";
import "../Pages/factu.css"
import Nave from '../Pages/navegacion'
import  Pie from "../Pages/Footer";

function factura() {
  return (
    <div>
        <Nave/>

<div class="container mb-5 mt-5">
    <div class="pricing card-deck flex-column flex-md-row mb-3">
        <div class="card card-pricing text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Starter</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="15">$<span class="price">1,200</span><span class="h6 text-muted ml-2">/ por especialista</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Espacio digital para un especialista</li>
                    <li>Espacio basico</li>
                    <li>Publicidad y Funciones limitadas</li>
                </ul>
                <p><a href="/Factura" class="btn btn-primary ">Solicitar </a></p>
            </div>
        </div>
        <div class="card card-pricing popular shadow text-center px-3 mb-4">
            <span class="h6 w-60 mx-auto px-4 py-1 rounded-bottom bg-primary text-white shadow-sm">Professional</span>
            <div class="bg-transparent card-header pt-4 border-0">
                <h1 class="h1 font-weight-normal text-primary text-center mb-0" data-pricing-value="30">$<span class="price">2,500</span><span class="h6 text-muted ml-2">/ por especialista</span></h1>
            </div>
            <div class="card-body pt-0">
                <ul class="list-unstyled mb-4">
                    <li>Espacio digital para un especialista</li>
                    <li>Espacio Avanzado</li>
                    <li>Publicidad y Funciones ilimitadas</li>
                </ul>
                <p><a href="/Factura" class="btn btn-primary ">Solicitar </a></p>
            </div>
        </div>
      
      
    </div>
</div>
<Pie/>
    
    
    
    </div>


  );
}

export default factura;
