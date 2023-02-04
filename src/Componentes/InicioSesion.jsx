
import axios from "axios";
import React, {useState}from "react";
import { Link } from "react-router-dom";


function InicioSesion() {
  //Hooks
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");

  const validar_usuario = (ev) => {
    ev.preventDefault();
    var usuario={
      correo:correo,
      contraseña: contraseña
    }
  };

  return (
    <div class="modal modal-signin position-static d-block py-5" tabindex="-1" role="dialog" id="modalSignin">
  <div class="modal-dialog" role="document">
    <div class="modal-content rounded-4 shadow">
      <div class="modal-header p-5 pb-4 border-bottom-0">
        <h1 class="text-danger fw-bold mb-0 fs-2">Rappi</h1>
      </div>

      <div class="modal-body p-5 pt-0">
        <form class="">
          <div class="form-floating mb-3">
            <input type="email" class="form-control rounded-3" id="floatingInput" placeholder="nombre@ejemplo.com"/>
            <label for="floatingInput">Correo</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control rounded-3" id="floatingPassword" placeholder="Contraseña"/>
            <label for="floatingPassword">Contreseña</label>
          </div>
          <button class="w-100 mb-2 btn btn-lg rounded-3 btn-danger" type="submit">Inicio sesión</button>
          <button type="button" class="btn btn-lg rounded-3 w-100 mb-2 btn-outline-danger">Registarme</button>
        </form>
      </div>
    </div>
  </div>
</div>
  );
}

export default InicioSesion;
