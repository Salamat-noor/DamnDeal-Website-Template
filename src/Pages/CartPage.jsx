import React from "react";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import { useLocation } from "react-router-dom";
import BreadCrumbs from "../Components/bread_crumbs";
import { Col, Row } from "antd";
import Index from "../Components/shopping_cart/index";

const CartPage = () => {
  const location = useLocation();
  const product = location.state.product;

  return (
    <Layout>
      <Row justify={"center"}>
        <Col xs={20}>
          <BreadCrumbs />
        </Col>
        <Col xs={24}>
          <StyledHeading>Shopping Cart</StyledHeading>
        </Col>
        <Col xs={24} sm={20}>
          <Index data={product} />
        </Col>
      </Row>
    </Layout>
  );
};

export default CartPage;

const StyledHeading = styled.h1`
  text-align: center;
`;
