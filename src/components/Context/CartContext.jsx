import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartNum, setCartNum] = useState(0);

  useEffect(() => {
    setCartNum(cart.length);
  }, [cart]);

  const AddToCart = (producto) => {
    setCart([...cart, producto]);
  };

  const isInCart = (id) => {
    return cart.some((producto) => producto.id === id);
  };

  const totalCart = () => {
    return cart.reduce((acc, producto) => acc + producto.quantity * producto.price, 0);
  };
  const remove = (id) =>{
    setCart( cart.filter((productos) => productos.id !== id))
  }
  const modCar = (id) =>{
    const _cart = cart.slice()
    const producto = _cart.find(e => e.id === id)
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        AddToCart,
        isInCart,
        cartNum,
        totalCart,
        remove
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
