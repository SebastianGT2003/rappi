import React, { useContext } from "react";
import CartContext from "../Funciones/Funciones"

export const ItemCart = ({ item }) => {
  /* Traemos del context las funciones para agregar y sacar productos del carrito */
  const { editItemToCart } = useContext(CartContext);

  /* Desestructuramos el item para sacar solo la id */
  const { amount } = item;

  return (
    <div className="">
      <img src={item.img} alt={item.nombre} />
      <div className="">
        <div className="">
          <p>{item.nombre}</p>
          <div className="">
            <button onClick={() => editItemToCart(item._id, "add", amount)}>
              AGREGAR
            </button>
            <button onClick={() => editItemToCart(item._id, "del", amount)}>
              SACAR
            </button>
          </div>
        </div>
        <div className=" ">
          <div>{item.cantidad}</div>
          <p>Total: ${item.cantidad * item.price}</p>
        </div>
      </div>
    </div>
  );
};