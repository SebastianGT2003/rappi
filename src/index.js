import React from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals';


import Tienda from './Paginas/Tienda';
import InicioSesion from './Paginas/Inicio';
import Registro from './Paginas/Registro';


import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";





const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<InicioSesion/>} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/tienda" element={<Tienda />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
reportWebVitals();


