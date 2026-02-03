import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import CartContext from "../context/Context";
// import { products } from "../data/data";

const ProjectDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  //-----------------------With Api--------------------------------

  useEffect(() => {
    fetch(`https://fakestoreapi.com//products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  //-----------------------Without Api--------------------------------

  // useEffect(() => {
  //   setProduct(products.find((data) => data.id ==Number(id)))
  // }, [id,product])

  // // console.log(product);

  return (
    <>
      <div>
        ProjectDetails
        <Link to="/">
          <span> Back to All products</span>
        </Link>
        <div className="product-card">
          <div className="product-image">
            <img src={product.image} />
          </div>

          <div className="product-details">
            <h2>{product.title}</h2>
            <p className="price">${product.price}</p>
            <p className="description">{product.description}</p>
            <div className="rating">
              <p>Rating⭐ {product.rating?.rate}/5</p>
            </div>
            {/* <div className="price">{product.rating?.count}</div> */}
            <button className="btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
