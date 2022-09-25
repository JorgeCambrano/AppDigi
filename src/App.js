import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeService from "../src/inicio/HomeService";
import Home from "../src/inicio/menus";
import Registro from "../src/Pages/formulario";
import Sesion from "../src/Pages/Inicio";
import PerfilP from "./Pages/PerfilP";
import Factura from "../src/Pages/factura";
import Reserva from "../src/Pages/resev";
import Califi from "../src/Pages/califi";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
          <Route exact path="/HomeService" element={<HomeService />} />
          <Route exact path="/Inicio" element={<Home />} />
          <Route exact path="/Registro" element={<Registro />} />
          <Route exact path="/Sesion" element={<Sesion />} />
          <Route exact path="/PerfilP" element={<Factura/>} />
          <Route exact path="/Factura" element={<PerfilP/>} />
          <Route exact path="/Reserva" element={<Reserva/>} />
          <Route exact path="/Cali" element={<Califi/>} />








        </Routes>
      </Router>
    </div>
  );
}

export default App;
