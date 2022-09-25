import React  from "react";
import {Link} from 'react-router-dom'
function navegacion() {
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
                  <Link className="nav-link" to="/HomeService">
                    MenuServicios
                  </Link>
                
                </li>

                <li class="nav-item active">
                  <Link class="nav-link"  to="/PerfilP">Pago de servicios </ Link>
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
                    <Link class="dropdown-item" to="/Sesion">
                      Iniciar Sesion
                      </Link>
                    </li>
                    <li>
                      <Link class="dropdown-item" to="/Registro">
                      Registro
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
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>

  );
}

export default navegacion;
