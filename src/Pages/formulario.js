import React from "react";
import './form.css';
import Pie from "../Pages/Footer"

function formulario() {
  return (
    <div className="regi">

      <form class="formi">
        <h2 className="formi-title"> REGISTRO DE PROFESIONISTA</h2>

        <div className="input-block">
          <label for="username" class="label">
            Nombre de Usuario 
          </label>
          <input
            type="text"
            name="username"
            class="input username-input"
            aria-describedby="nombre"
            placeholder="Ingrese su nombre "
          />
        </div>

        <div className="input-block">
          <label for="userapellido" class="label">
            Apellidos del Usuario
          </label>
          <input
            type="text"
            name="userapellido"
            class="input username-input"
            aria-describedby="apellidos"
            placeholder="Ingrese su apellidos "

          />
        </div>

        <div className="input-block">
          <label for="userprofesion" class="label">
            Profesion
          </label>
          <input
            type="text"
            name="userprofesion"
            class="input username-input"
            aria-describedby="profesion"
            placeholder="Ingrese su profesion "
    
          />
        </div>

        <div className="input-block">
          <label for="email" class="label">
            Email
          </label>
          <input
            type="text"
            name="email"
            class="input email-input"
            aria-describedby="email"
            placeholder="Ingrese su correo electronico"

          />
        </div>

        <div className="input-block">
          <label for="direccion" class="label">
            Dirección
          </label>
          <input
            type="text"
            name="direccion"
            class="input direccion-input"
            aria-describedby="direccion"
            placeholder="Ingrese su direccion "
          />
        </div>

        <input type="submit" value="Enviar" className="btn btn-primary" />
      </form>
      <br/>
      <Pie/>

    </div>
  );
}

export default formulario;
