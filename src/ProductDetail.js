import React from "react";
import { useParams } from "react-router-dom";
import productsData from "./productsData";

function ProductDetail() {
  const { productId } = useParams();
  const thisProduct = productsData.find((prod) => prod.id === productId);

  return (
    <div>
      <h1>Single Product</h1>
    </div>
  );
}

export default ProductDetail;

// <h1>{thisProduct.brand}</h1>
// <p>Price: ${thisProduct.price}</p>
// <p>{thisProduct.title}</p>
// <p>{thisProduct.category}</p>
