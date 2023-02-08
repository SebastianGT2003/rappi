import { useContext } from "react";
import CartContext from "../Funciones/Funciones";

function Productos() {

/*     const [busqueda, setBusqueda] = useState("");

    const handleChange = e => {
        console.log(busqueda)
        setBusqueda(e.target.value);
        filtrar(e.target.value);
    }

    const filtrar = (terminoBusqueda) => {
        var resultadosBusqueda = tablaUsuarios.filter((elemento) => {
            if (elemento.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
                || elemento.company.nombre.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
            ) {
                return elemento;
            }
        });
        setUsuarios(resultadosBusqueda);
    } */
 
    const { addItemToCart, products } = useContext(CartContext)

    return (
        <div className="my-5 mx-5">
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Tipo de porducto" aria-label="Tipo de porducto" aria-describedby="button-addon2"/*  onChange={handleChange} */ />
            </div>
            <div className="">
      {products &&
        products.map((product, i) => (
          <div key={i} className="">
            <img src={product.img} alt={product.nombre} />
            <div>
              <p>
                {product.nombre} - ${product.precio}
              </p>
            </div>
            {!product.seleccionada ? (
              <button onClick={() => addItemToCart(product)}>
                Add to Cart
              </button>
            ) : (
              <button>En el carrito</button>
            )}
          </div>
        ))}
    </div>
        </div>
    );
}

export default Productos;
