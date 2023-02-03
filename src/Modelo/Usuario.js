import { BrowserRouter as Router, Link, useNavigate } from "react-router-dom";
import axios from "axios";

class usuario {
  constructor(nombre, correo, contraseña, direccion, celular) {
    /* Todo lo que necesita un usuario */

    this.nombre = nombre;
    this.correo = correo;
    this.contraseña = contraseña;
    this.direccion = direccion;
    this.celular = celular;
  }
  navegador = useNavigate();

  iniciar_sesion = (body) => {
    axios
      .post("http://localhost:4000/inicio_sesion", body)
      .then(({ data }) => {
        console.log(data);

        alert("Login correcto");
        this.navegador("/productos");
      })
      .catch(({ response }) => {
        console.log(response.data);
        alert("Login incorrecto");
      });
    
    };
    cerrar_sesion = () => {
        return this.navegador("/");
  };
}

export default usuario;
