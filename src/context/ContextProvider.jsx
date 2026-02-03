import React, { useEffect, useState } from "react";
import CartContext from "./Context";



const ContextProvider = ({ children }) => {
  const [carts, setCarts] = useState([]);
  const [products,setProducts]=useState([])
  const [searchInput, setsearchInput] = useState("");

  const addToCart = (item) => {  
        setCarts([...carts,item])
  };



  
  useEffect(() => {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []);
  
  return (
    <CartContext.Provider value={{carts,products,searchInput, setsearchInput,addToCart}}>
      {children}
    </CartContext.Provider>
  
  );
};

export default ContextProvider;
