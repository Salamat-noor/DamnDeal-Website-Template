import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Button = (props) => {
  const navigate = useNavigate();

  const navigateTo = (e) => {
    e.preventDefault();
    if (e.target.innerText === "Continue Shopping") {
      navigate("/products");
    }
    if (e.target.innerText === "Proceed to checkout") {
      navigate("/shopcheckout");
    }
  };

  return (
    <StyledButton
      onClick={navigateTo}
      $innertext={props.innertext}
      type="button"
    >
      {props.title}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  padding: 10px 5px;
  cursor: pointer;
  color: #041e42;
  background: ${(props) =>
    props.$innertext === "Continue Shopping" ? `#FFF` : `#f5c34b`};
  border: 1px solid #f5c34b;
  box-shadow: 0px 5px 20px 0px #f5c34b26;
  font-size: ${(props) =>
    props.$innertext === "Continue Shopping" ? `10px` : `12px`};

  @media (max-width: 1024px) {
    font-size: ${(props) =>
      props.$innertext === "Continue Shopping" ? `10px` : `12px`};
  }
`;
