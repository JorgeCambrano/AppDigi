import React, {  useEffect, useState } from "react";
import Axios from "../Servicios/Axios";
import { useParams, useNavigate } from "react-router-dom";

function Consulta() {
  const variables = {
    _id: "",
    nombre: "",
    profesion: "",
    direccion: "",
    edad: "",
    sexo: "",
    image: "",
  };

  const [guardarPersonas, setguardarPersonas] = useState(variables);

  const params = useParams();
  const navigate = useNavigate();

  const obtenerValues = (e) => {
    const { name, value } = e.target;
    setguardarPersonas({ ...guardarPersonas, [name]: value });
  };

  const guardarDatos = (e) => {
    const formulario = document.getElementById("formalumno");
    const formData = new FormData(formulario);

    Axios.post("/persona/guardar", formData).then(() => {
      console.log("Registros guardados exitosamente");
    });
  };
  const onePersona = async (id) => {
    const buscarPersona = await Axios.get("/persona/consultarOne/" + id);
    setguardarPersonas(buscarPersona.data);
  };

  const updatePersona = async () => {
    await Axios.put(
      `/persona/actualizar/${params.id}`,
      guardarPersonas
    ).then(() => {
      console.log("Datos actualizados correctamente");
    });

    navigate("/");
  };

  const Enviar = (e) => {
    e.preventDefault();

    if (guardarPersonas._id === "") {
      guardarDatos();
    } else {
      updatePersona();
    }
  };
  useEffect(() => {
    onePersona(params.id);
  },);

  return (
    <div>
      <form onSubmit={Enviar} id="formalumno">
        <div class="row mb-3">
          <div class="col-sm-10">
            <div class="row mb-3"></div>

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">
                Nombre de profesionista
              </label>
              <div class="col-sm-10">
                <input type="text" class="form-control" name="nombre"
                value={guardarPersonas.nombre}
                onChange={obtenerValues} />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Profesion</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" name="profesion"
                 value={guardarPersonas.profesion}
                 onChange={obtenerValues} />
              </div>
            </div>

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Sexo</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" name="sexo" 
                value={guardarPersonas.sexo}
                onChange={obtenerValues}/>
              </div>
            </div>

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Dirección</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" name="direccion"
                value={guardarPersonas.direccion}
                onChange={obtenerValues} />
              </div>
            </div>

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Edad</label>
              <div class="col-sm-10">
                <input type="text" class="form-control" name="edad" 
                value={guardarPersonas.edad}
                onChange={obtenerValues}/>
              </div>
            </div>

            <div class="row mb-3">
              <label class="col-sm-2 col-form-label">Imagen</label>
              <div class="col-sm-10">
                <input type="file" class="form-control" name="image" 
                 value={guardarPersonas.image}
                 onChange={obtenerValues}/>
              </div>
            </div>
            <button type="submit" class="btn btn-primary">
            {guardarPersonas._id === "" ? "Guardar" : "Actualizar"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Consulta;
