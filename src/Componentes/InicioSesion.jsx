import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

function InicioSesion() {
  return (
    <div className="modal modal-signin position-static d-block py-5" tabindex="-1" role="dialog" id="modalSignin">
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <figure className="text-center my-5">
              <h1 className="text-danger">Rappi</h1>
          </figure>

          <div className="modal-body p-5 pt-0">
            <form className="">
              <div className="form-floating mb-3">
                <input type="email" className="form-control rounded-3" id="floatingInput" placeholder="nombre@ejemplo.com" />
                <label for="floatingInput">Correo</label>
              </div>
              <div className="form-floating mb-3">
                <input type="password" className="form-control rounded-3" id="floatingPassword" placeholder="Contraseña" />
                <label for="floatingPassword">Contreseña</label>
              </div>
              <button className="w-100 mb-2 btn btn-lg rounded-3 btn-danger" type="submit">Inicio sesión</button>
            </form>
            <Link to ="registro">
            <button type="button" className="btn btn-lg rounded-3 w-100 mb-2 btn-outline-danger">Registarme</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InicioSesion;
