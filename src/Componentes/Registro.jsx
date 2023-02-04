import React from "react";
import {
  BrowserRouter as Router,
  Link,
  useNavigate,
} from "react-router-dom";

function Registro() {
  return (
    <div
      className="modal modal-signin position-static d-block py-5"
      tabindex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content rounded-4 shadow">
          <div className="modal-header p-5 pb-4 border-bottom-0">
            <h1 className="text-danger fw-bold mb-0 fs-2">Nuevo usuario</h1>
            <Link to ="/">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            </Link>
          </div>
          <div className="modal-body p-5 pt-0">
            <form className="">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="Nombre"
                  required
                />
                <label for="floatingPassword">Nombre</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="nombre@ejemplo.com"
                  required
                />
                <label for="floatingInput">Correo</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  required
                />
                <label for="floatingPassword">Contreseña</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control rounded-3"
                  id="floatingInput"
                  placeholder="Dirección"
                  required
                />
                <label for="floatingPassword">Dirección</label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control rounded-3"
                  id="floatingCelular"
                  placeholder="Celular"
                  required
                />
                <label for="floatingPassword">Celular</label>
              </div>
              <button
                type="submit"
                className="btn btn-lg rounded-3 w-100 mb-2 btn-outline-danger"
              >
                Registarme
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registro;
