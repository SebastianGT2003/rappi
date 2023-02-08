import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

/* Creamos el context, se le puede pasar un valor inicial */
const CartContext = createContext();

export const CartProvider = ({ children }) => {
   
  /* Creamos un estado para el carrito */
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    await axios
      .get("http://localhost:5000/productos")
      .then(({ data }) => setProducts(data.productos));
  };

  const getProductsCart = async () => {
    return await axios
      .get("http://localhost:5000/productos-en-carrito")
      .then(({ data }) => setCartItems(data.productosEnCarrito))
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    getProducts();
    getProductsCart();
  }, []);

  const addItemToCart = async (product) => {
    const { nombre, img, precio } = product;

    await axios.post("http://localhost:5000/productos-en-carrito", { nombre, img, precio });

    getProducts();
    getProductsCart();
  };

  const editItemToCart = async (id, query, cantidad) => {
    if (query === "del" && cantidad === 1) {
      await axios
        .delete(`http://localhost:5000/productos-en-carrito/${id}`)
        .then(({ data }) => console.log(data));
    } else {
      await axios
        .put(`http://localhost:5000/productos-en-carrito/${id}?query=${query}`, {
          cantidad,
        })
        .then(({ data }) => console.log(data));
    }

    getProducts();
    getProductsCart();
  };

  return (
    /* Envolvemos el children con el provider y le pasamos un objeto con las propiedades que necesitamos por value */
    <CartContext.Provider
      value={{ addItemToCart, editItemToCart , cartItems, products}}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;