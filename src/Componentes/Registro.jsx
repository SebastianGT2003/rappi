import React, { useState } from "react";
import uniquid from 'uniqid';
import axios from "axios";


function Registro() {
  //Hokks
  const [nombre, setNombre] = useState("");

  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [direccion, setDireccion] = useState("");
  const [celular, setCelular] = useState("");

  const registrar_usuario = (ev) => {
    ev.preventDefault();
    var usuario={
      nombre:nombre,
      correo:correo,
      contraseña: contraseña,
      direccion:direccion,
      celular:celular
    }
    console.log(usuario)

    axios.post('/api/usuario/registrar_usuario', usuario)
    .then(res=>{
      alert(res.data)
    })
    .then(err=>{
      console.log(err)
    })
  }

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
                  value={nombre}
                  onChange={(e)=>{setNombre(e.target.value)}}
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
                  value={correo}
                  onChange={(e)=>{setCorreo(e.target.value)}}
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
                  value={contraseña}
                  onChange={(e)=>{setContraseña(e.target.value)}}
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
                  value={direccion}
                  onChange={(e)=>{setDireccion(e.target.value)}}
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
                  value={celular}
                  onChange={(e)=>{setCelular(e.target.value)}}
                  required
                />
                <label for="floatingPassword">Celular</label>
              </div>
              <button
                type="submit"
                class="btn btn-lg rounded-3 w-100 mb-2 btn-outline-danger"
                onChange={registrar_usuario}
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
