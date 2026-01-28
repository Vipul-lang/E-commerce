import React, { useState } from "react";
import CartContext from "./Context";


const ContextProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);

  const addToCart = (product) => {  
        setCarts([...carts,product])
  };
  ;
  
  return (
    <CartContext.Provider value={{carts,addToCart}}>
        {children}
    </CartContext.Provider>
  );
};

export default ContextProvider;
