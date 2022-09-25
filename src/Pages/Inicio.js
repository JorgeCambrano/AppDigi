import React from "react";
import "../Pages/ses.css"
import Pie from "../Pages/Footer"
function Inicio() {
  return (
    <div>
 
      <div className="ses">
        <br />
        <br />

        <form class="form">
          <h2 class="form-title"> INICIAR SESIÓN</h2>
          <div class="error block">
            <p class="error"> </p>
          </div>


          <div class="input-block">
            <label for="email" class="label">
              Email
            </label>
            <input type="text" name="email" class="input email-input" />
          </div>

          <div class="input-block">
            <label for="password" class="label">
              Password
            </label>
            <input type="password" name="password" class="input pw-input" />
            <p class="input-info">
              Debe tener al menos 6 caracteres de longitud
            </p>
          </div>

          

          <div class="input-block">
            <input type="submit"  class="input-submit" />
          </div>
        </form>

      </div>
      <hr/>
      <Pie/>
      </div>
      
      
      

  
  );
}

export default Inicio;
