import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "../Servicios/Axios";

function Agregar() {
  const urlImage = "http://localhost:4000/public/imagenes/";

  const [personas, setPersonas] = useState([]);

  const navigate = useNavigate();

  const listarPersonas = async () => {
    const listarPersonas = await Axios.get("persona/consultar");
    setPersonas(listarPersonas.data);
    // console.log(consultar.data);
  };

  useEffect(() => {
    listarPersonas();
  }, []);

  return (
    <div>
      <div class="row row-cols-1 row-cols-md-2 g-4">
        {personas.map((persona) => {
          return (
            <div class="col">
              <div class="card">
                <img
                  src={urlImage + persona.filename}
                  class="card-img-top"
                  alt="..."
                  width="100px"
                  height="250px"
                />
                <div class="card-body">
                  <h5 class="card-title">{persona.nombre}</h5>
                  <h5 class="card-title">{persona.profesion}</h5>
                  <h5 class="card-title">{persona.direccion}</h5>

                  <p class="card-text">
                    <button
                      className="btn btn-primary"
                      onClick={() => navigate(`/persona/${persona._id}`)}
                    >
                      Ir...
                    </button>
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Agregar;
