import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../fire";


export default function navegacion({ setAuthState, setUser }) {
  const signOutHandler = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
        setAuthState("login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-primary-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            DIGI
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/Inicio">
                  Inicio
                </Link>
              </li>

            

              <li class="nav-item active">
                <Link class="nav-link" to="/PerfilP">
                  Pago de servicios{" "}
                </Link>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Servicios
                </a>
                <ul class="dropdown-menu">
                 
                
                  <li>
                    <Link class="dropdown-item" to="/Consulta">
                      Registro de profesionista
                    </Link>
                  </li>
                  <li>
                    <Link class="dropdown-item" to="/Agregar">
                      Registros
                    </Link>
                  </li>

                  <li>
                    <hr class="dropdown-divider" />
                  </li>

                  <li>
                    <Link class="dropdown-item" to="/Factura">
                      Factura
                    </Link>
                  </li>


                </ul>
              </li>
            </ul>
            <button  onClick={signOutHandler} type="button" class="btn btn-danger">Cerrar Sesion</button>

            
          
          </div>
        </div>
      </nav>
    </div>
  );
}
