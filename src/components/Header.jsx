import React, { useContext, useState } from "react";
import Cart from "./Cart";
import CartContext from "../context/Context";
import { Link } from "react-router";



const Header = () => {
  const { setsearchInput,carts } = useContext(CartContext);
    // console.log(setsearchInput);
 


  

  return (
    <nav className="navbar">
      <div className="nav-left">
        <a className="navbar-brand" href="#">
          Shopify
        </a>

        {/* <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link active" to="/">
              Home
            </Link>
          </li>
        </ul> */}
      </div>

      <div className="nav-right">
        <input
          className="search-input"
          type="search"
          placeholder="Search Products, Brands.."
          onChange={(e)=>setsearchInput(e.target.value)}
          
        />
        
        
        

        {/* <button className="search-btn">Search</button> */}

        <div className="cart-box">
          <Link to="/cart">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png"
              alt="cart"
            />
            <span className="cart-count">{carts.length}</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
