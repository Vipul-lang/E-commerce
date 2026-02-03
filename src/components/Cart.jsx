import React, { useContext } from 'react'
import CartContext from '../context/Context';
import { Link } from 'react-router';



const Cart = () => {

  return (
    <div>
      <h2>Carts</h2>
      <Link to='/'>
          <span> Back to All products</span>
        </Link>
    </div>
  );
}

export default Cart