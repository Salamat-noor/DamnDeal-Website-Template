import React from "react";
import CheckoutForm from "../Components/checkout_form";
import styled from "styled-components";
import Layout from "../Layout/Layout";
import { Row, Col } from "antd";

const CheckOutForm = () => {
  return (
    <Layout>
      <StyledFormRow justify={"center"}>
        <Col xs={24} sm={20}>
          <CheckoutForm />
        </Col>
      </StyledFormRow>
    </Layout>
  );
};

export default CheckOutForm;

const StyledFormRow = styled(Row)`
  margin: 3rem 0;
`;
