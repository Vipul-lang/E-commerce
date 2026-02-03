import React, { useContext } from 'react'
import CartContext from '../context/Context';
<<<<<<< HEAD
import { Link } from 'react-router';
=======
import { Link } from "react-router";
>>>>>>> fde9756bae279d8a69b5b7578c3efc7b0c85ac76



const Cart = () => {

  return (
    <div>
      <h2>Carts</h2>
<<<<<<< HEAD
      <Link to='/'>
=======
       <Link to={"/"}>
>>>>>>> fde9756bae279d8a69b5b7578c3efc7b0c85ac76
          <span> Back to All products</span>
        </Link>
    </div>
  );
}

export default Cart
