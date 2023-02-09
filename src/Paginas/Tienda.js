import Navbar from "../Componentes/Navbar";
import Productos from "../Componentes/Productos"

function tienda() {
    return (
      <div className="index">
        <Navbar />
        <Productos />
      </div>
    );
  }
  
  export default tienda;