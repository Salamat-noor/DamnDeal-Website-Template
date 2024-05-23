import React from "react";
import { StyledProductDetails } from "./styles";

const ProductDetailsAsset = ({ maintitle, title, price }) => {
  return (
    <>
      <h3>{maintitle && maintitle}</h3>

      <StyledProductDetails>
        <h4>{title && title}</h4> <p>{price && price}</p>
      </StyledProductDetails>
    </>
  );
};

export default ProductDetailsAsset;
