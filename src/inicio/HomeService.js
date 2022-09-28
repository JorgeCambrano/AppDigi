import React from "react";
import logoOdo from "../Multimedia/medicina-odo.jpg";
import logoVeti from "../Multimedia/medicina-veti.jpg";
import logoPsi from "../Multimedia/medicina-psi.jpg";
import logoOpto from "../Multimedia/medici-opto.jpg";
import logoFisii from "../Multimedia/medicina-fisio.jpg";
import Navee from "../Pages/navegacion";
import { BsTag } from "react-icons/bs";
import face from "../Multimedia/face.png";
import inf from "../Multimedia/info.png";
import llama from "../Multimedia/llama.png";
import what from "../Multimedia/what.png";
import "../inicio/diseño.css";
import Pie from "../Pages/Footer";

function HomeService() {
  
  return (

    <div>
      <Navee />
      <br />
      <h3 align="right">
        CATEGORÍAS <span class="badge badge-secondary"></span>
        <BsTag />
      </h3>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={logoOdo} class="logo" alt="jpg" />
              <h5 class="card-title">Odontologia</h5>
              <p class="card-text">Dr. Yuliana del rosario Mendez Cambrano</p>

              <p>
                <a href="/Reserva" class="btn btn-primary ">
                  Reservar{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                  Calificar{" "}
                </a>
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={logoVeti} class="logo" alt="jpg" />
              <h5 class="card-title">Veterinaria</h5>
              <p class="card-text">Dr. Yuliana del rosario Mendez Cambrano</p>
              <p>
                <a href="/Reserva" class="btn btn-primary ">
                  Reservar{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                  Calificar{" "}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={logoPsi} class="logo" alt="jpg" />
              <h5 class="card-title">Psicologia</h5>
              <p class="card-text">Dr. Aurora Salome Gutierres</p>
              <p>
                <a href="/Reserva" class="btn btn-primary ">
                  Reservar{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                  Calificar{" "}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={logoOpto} class="logo" alt="jpg" />
              <h5 class="card-title">Optometria</h5>
              <p class="card-text">Dr.Samuel Manuel Mendez Lopez</p>
              <p>
                <a href="/Reserva" class="btn btn-primary ">
                  Reservar{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                  Calificar{" "}
                </a>
                
              </p>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={logoFisii} class="logo" alt="jpg" />
              <h5 class="card-title">Fisioterapeuta</h5>
              <p class="card-text">Dr. Paola Fiorelia Lopez Lopez</p>
              <p>
                <a href="/Reserva" class="btn btn-primary ">
                  Reservar{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                  Calificar{" "}
                </a>
                
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card">
            <div class="card-body">
              <img src={logoVeti} class="logo" alt="jpg" />
              <h5 class="card-title">Veterinaria</h5>
              <p class="card-text">Dr. Yuliana del rosario Mendez Cambrano</p>
              <p>
                <a href="/Reserva" class="btn btn-primary ">
                  Reservar{" "}
                </a> <a href="/Cali" class="btn btn-outline-warning ">
                  Calificar{" "}
                </a>
              </p>
            </div>
          </div>
        </div>

        
      </div>

      <Pie />
    </div>
  );
}

export default HomeService;
