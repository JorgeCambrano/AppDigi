import React from "react";
import "./Footer.css";
import face from '../Multimedia/face.png'
import  inf from '../Multimedia/info.png'
import llama from '../Multimedia/llama.png'
import  what from  '../Multimedia/what.png'
function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>DIRECCTORIO DIGITAL</h4>
            <h1 className="list-unstyled">
              <li>PALENQUE, CHIAPAS</li>
            </h1>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>ENLANCES</h4>
            <ui className="list-unstyled">
              <li>Acerca de DIGI</li>
              <li>Términos y Condiciiones</li>
              <li>Pólitica y Privacidad</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>REDES SOCIALES</h4>
            <ui className="list-unstyled">
              <img src={face} alt="jpg" width="30px" height="30px" />
              <img src={what} alt="jpg" width="30px" height="30px" />
              <img src={inf} alt="jpg" width="30px" height="30px" />
              <img src={llama} alt="jpg" width="30px" height="30px" />
            </ui>
          </div>
        </div>
        <hr />

        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
