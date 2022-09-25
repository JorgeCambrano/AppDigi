import React from "react";
import Civi from "../Multimedia/INGE.jpg";
import Lic from "../Multimedia/LIC.jpg";
import Medi from "../Multimedia/DOC.jpg";
import Depo from "../Multimedia/Depor.jpg";
import Educ from "../Multimedia/edu.jpg";
import Jana from "../Multimedia/Jana.jpg";
import Movi2 from "../Multimedia/movi22.svg";
import "../inicio/diseñomenu.css";
import Nue from "../Multimedia/nue.svg";
import { BsTag } from "react-icons/bs";
import Nave from '../Pages/navegacion'
import  Pie from "../Pages/Footer";


function menus() {
  return (
    <div>
      <Nave/>
      <br />

      <div class="banner">
        <div class="container">
          <div class="row">
            <div class="col-sm-5">
              <h1 class="display-4 fw-bold">DIGI</h1>
              <p>
                Se ofrecen multiples opciones de servicios y atenciones de
                especialistas, dándoles una extensa seleccion de la cartera de
                candidatos donde podrá elegir al que más se adapte a su
                necesidad.
              </p>
              <button class="btn btn-success">Leer más sobre DIGI</button>
            </div>
            <div class="col-sm-7">
              <img class="img-fluid" src={Nue} alt="" />
            </div>
          </div>
        </div>
      </div>
      <br/>
      <div class="row ">
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">REGISTRO DE CLIENTE</h5>
              <p class="card-text">
                Formulario de registro para los usuarios clientes que requieran solictar servicios
              </p>
              <p><a href="/Registro" class="btn btn-primary ">Ir al formulario</a></p>

            </div>
          </div>
        </div>
        <div class="col-sm-6 ">
          <div class="card ">
            <div class="card-body">
              <h5 class="card-title">REGISTRO DE PROFESIONISTA</h5>
              <p class="card-text">
                Formulario de registro para los usuarios profesionistas que requieran ofrecer servicios a publico 
              </p>
              <p><a href="/Registro" class="btn btn-primary ">Ir al formulario</a></p>

              
            </div>
          </div>
        </div>
      </div>
      <br />

      <div class=" col-sm-6 mx-auto">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={Movi2}
              class="img-fluid rounded-start"
              width="200px"
              alt="..."
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">PROCESO DE USO DE DIGI</h5>
              <p class="card-text">
                1- Registrarse en DIGI como cliente para continuar con sus solicitudes de servicios.
                <br />
                2- Entrar a la especializacion correspondiente que deseé solicitar.
                <br />
                3- Encontrará especialistas del area y informacion detallada de sus servicios.
                <br />
                4- Al solicitar un servicio, se le direccionará para el apartado de reserva y pago.
                <br />
                
              </p>
            </div>
          </div>
        </div>
      </div>


      <h3 align="right">
        CATEGORÍAS <span class="badge badge-secondary"></span>
        <BsTag />
      </h3>

      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner ">
          <div class="carousel-item active">
            <div class="cards-wrapper">
              <div class="card">
                <img src={Medi} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">SANIDAD Y SALUD</h5>
                  <p class="card-text">
                  El sector salud o la sanidad es el conjunto de bienes y servicios encaminados a preservar y proteger la salud de las personas
                  </p>
                  <p><a href="/HomeService" class="btn btn-primary ">Ir </a></p>
                </div>
              </div>

              <div class="card d-none d-md-block">
                <img src={Lic} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">LICENCIATURA</h5>
                  <p class="card-text">
                  Persona capacitada para cumplir con una serie de tareas en un ámbito determinado.
                  </p>
                  <p><a href="/HomeService" class="btn btn-primary ">Ir </a></p>
                </div>
              </div>

              <div class="card d-none d-md-block">
                <img src={Civi} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">INGENIERÍAS</h5>
                  <p class="card-text">
                    Personas con conocimientos científicos y técnicos para crear elementos, materiales o instalaciones con las características
                  </p>
                  <p><a href="/HomeService" class="btn btn-primary ">Ir </a></p>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src={Depo} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">DEPORTE</h5>
                  <p class="card-text">
                  Actividad física como cualquier movimiento corporal producido por los músculos esqueléticos, con el consiguiente consumo de energía.
                  </p>
                  <p><a href="/HomeService" class="btn btn-primary ">Ir </a></p>
                </div>
              </div>

              <div class="card d-none d-md-block">
                <img src={Educ} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">EDUCACIÓN Y FORMACIÓN</h5>
                  <p class="card-text">
                  La educación se refiere principalmente a la transmisión de conocimientos.
                  </p>
                  <p><a href="/HomeService" class="btn btn-primary ">Ir </a></p>
                </div>
              </div>
              <div class="card d-none d-md-block">
                <img src={Jana} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">AGRICULTURA Y GANADERÍA </h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                  <p><a href="/HomeService" class="btn btn-primary ">Ir </a></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      

   <Pie/>
    </div>
  );
}

export default menus;
