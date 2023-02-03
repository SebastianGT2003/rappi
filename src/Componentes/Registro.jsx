import React from "react";

function Registro() {
  return (
    <div
      class="modal modal-signin position-static d-block py-5"
      tabindex="-1"
      role="dialog"
      id="modalSignin"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content rounded-4 shadow">
          <div class="modal-header p-5 pb-4 border-bottom-0">
            <h1 class="text-danger fw-bold mb-0 fs-2">Nuevo usuario</h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body p-5 pt-0">
            <form class="">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control rounded-3"
                  id="floatingInput"
                  placeholder="Nombre"
                  required
                />
                <label for="floatingPassword">Nombre</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="email"
                  class="form-control rounded-3"
                  id="floatingInput"
                  placeholder="nombre@ejemplo.com"
                  required
                />
                <label for="floatingInput">Correo</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="password"
                  class="form-control rounded-3"
                  id="floatingPassword"
                  placeholder="Contraseña"
                  required
                />
                <label for="floatingPassword">Contreseña</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="text"
                  class="form-control rounded-3"
                  id="floatingInput"
                  placeholder="Dirección"
                  required
                />
                <label for="floatingPassword">Dirección</label>
              </div>
              <div class="form-floating mb-3">
                <input
                  type="number"
                  class="form-control rounded-3"
                  id="floatingCelular"
                  placeholder="Celular"
                  required
                />
                <label for="floatingPassword">Celular</label>
              </div>
              <button
                type="submit"
                class="btn btn-lg rounded-3 w-100 mb-2 btn-outline-danger"
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
