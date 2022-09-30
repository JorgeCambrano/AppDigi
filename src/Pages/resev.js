import React  from 'react';
import "../Pages/reserv.css"
function resev () {
    
        return (
            <div>

<div className="regii">

<form class="formii">
  <h2 className="formi-title"> RESERVA</h2>

  <div className="input-block">
    <label for="username" class="label">
      Nombre del cliente
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
Numero telefonico    </label>
    <input
      type="text"
      name="userapellido"
      class="input username-input"
      aria-describedby="apellidos"
      placeholder="Ingrese su numero telefonico "

    />
  </div>

  <div className="input-block">
    <label for="userapellido" class="label">
     Dirección actual
    </label>
    <input
      type="text"
      name="userapellido"
      class="input username-input"
      aria-describedby="apellidos"
      placeholder="Ingrese su domicilio "

    />
  </div>

  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Solicitud de Servicio</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>

<div id="date-picker-example" class="md-form md-outline input-with-post-icon datepicker" inline="true">
  <input placeholder="Select date" type="text" id="example" class="form-control"/>
  <label for="example">Try me...</label>
  <i class="fas fa-calendar input-prefix"></i>
</div>

 
  <input type="submit" value="Reserva" className="btn btn-primary" />
</form>
</div>
                
            </div>
        );
    
}

export default resev;