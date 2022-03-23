import React from "react";
import productsData from "./productsData";
import { Link } from "react-router-dom";

const Products = () => {
  const products = productsData.map((product) => {
    console.log(product);
    return (
      <div key={product.id} className="divk">
        <div>
          <h3>
            <Link to={`/products/${product.id}`}>{product.brand}</Link>
          </h3>

          <img src={product.image} />
          <p>Price : {product.price}</p>
          <p> {product.title}</p>
          <p>{product.category}</p>
        </div>

        <hr />
      </div>
    );
  });

  return (
    <React.Fragment>
      <h1> Differnet Products Page</h1>
      {products}
    </React.Fragment>
  );
};

export default Products;
