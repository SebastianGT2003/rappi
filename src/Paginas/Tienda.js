import Navbar from "../Componentes/Navbar";
import Tienda from "../Componentes/Productos";

function tienda() {
    return (
      <div className="index">
        <Navbar />
        <Tienda />
      </div>
    );
  }
  
  export default tienda;