import React from "react";
import ProductBox from "./ProductBox";
import pimage1 from "../images/s1.png";
import pimage2 from "../images/s2.png";
function Product() {
  return (
    <div id="products">
      <h1>CHOOSE & ENJOY</h1>
      <p>
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="a-container">
        <ProductBox image={pimage1} title="Luger Burger" />
        <ProductBox image={pimage2} title="Li Pigeon Burger" />
        <ProductBox image={pimage1} title="Luger Burger" />
      </div>
    </div>
  );
}

export default Product;
