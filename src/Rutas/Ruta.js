import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeService from "../inicio/HomeService";
import Contenido from "../inicio/menus";
import Registro from "../auth/Register";
import Sesion from "../auth/Login";
import PerfilP from "../Pages/PerfilP";
import Factura from "../Pages/factura";
import Reserva from "../Pages/resev";
import Califi from "../Pages/califi";
import Consul from "../Pages/consulta";
import Agregar from "../inicio/Agregar";

function Ruta() {
  return (
    <div >
      <Router>
        <Routes>
        <Route exact path="/" element={<Contenido />} />
          <Route exact path="/HomeService" element={<HomeService />} />
          <Route exact path="/Inicio" element={<Contenido />} />
          <Route exact path="/Registro" element={<Registro />} />
          <Route exact path="/Sesion" element={<Sesion />} />
          <Route exact path="/PerfilP" element={<Factura/>} />
          <Route exact path="/Factura" element={<PerfilP/>} />
          <Route exact path="/Reserva" element={<Reserva/>} />
          <Route exact path="/Cali" element={<Califi/>} />
          <Route exact path="/Consulta" element={<Consul/>} />
          <Route exact path="/Agregar" element={<Agregar/>} />









        </Routes>
      </Router>
    </div>
  );
}

export default Ruta;
