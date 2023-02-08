import Navbar from "../Componentes/Navbar";
import Carrito from "../Componentes/Carrito";
import Productos from "../Componentes/Productos"

function tienda() {
    return (
      <div className="index">
        <Navbar />
        <Productos />
        <Carrito />
      </div>
    );
  }
  
  export default tienda;