import React, { Component } from "react";
import "../diseño/cali.css"
import logoFisii from "../Multimedia/medicina-fisio.jpg";

function califi() {
  return (
    <div class="container text-center ">
        <br/>
      <div class="card text-center" width="18rem">
        <img src={logoFisii} class="logo" alt="jpg" />

        <div class="card-body">
          <p class="card-text">
          Dr. Paola Fiorelia Lopez Lopez
          </p>
          <h5>Fisioterapeuta</h5>

          <div class="rate bg-success py-3 text-white mt-3" />

          <h6 class="">Calificame en mi servicio</h6>

          <div class="rating">
            <input type="radio" name="rating" value="5" id="5" />
            <label for="5">☆</label>{" "}
            <input type="radio" name="rating" value="4" id="4" />
            <label for="4">☆</label>{" "}
            <input type="radio" name="rating" value="3" id="3" />
            <label for="3">☆</label>{" "}
            <input type="radio" name="rating" value="2" id="2" />
            <label for="2">☆</label>{" "}
            <input type="radio" name="rating" value="1" id="1" />
            <label for="1">☆</label>
          </div>

           <a href="/HomeService" class="btn btn-outline-success ">
                  Calificar{" "}
                </a>
                


          </div>
        </div>
      </div>

  );
}

export default califi;
