import React, { useEffect, useState } from "react";
import axios from "axios";

function Productos() {

  const [productos, setProductos] = useState([]);

  const getProductos = async () => {

    fetch("http://localhost:5000/productos")
    .then((response) =>{
      console.log(response.body)
      return response.json();
    })
  }

/*   useEffect(() => {
      peticionGet();
  }, [])
 */
  const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
  }) => {
    const onAddProduct = product => {
      if (allProducts.find(item => item.id === product.id)) {
        const products = allProducts.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setTotal(total + product.price * product.quantity);
        setCountProducts(countProducts + product.quantity);
        return setAllProducts([...products]);
      }
  
      setTotal(total + product.price * product.quantity);
      setCountProducts(countProducts + product.quantity);
      setAllProducts([...allProducts, product]);
    };

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
  };
    return (
      <div>
        <p>Hola</p>
        <button onClick={getProductos}></button>
      </div>
    );
}

export default Productos;
