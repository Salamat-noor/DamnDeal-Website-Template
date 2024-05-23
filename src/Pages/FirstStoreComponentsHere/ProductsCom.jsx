import React from "react";
import { Row, Col } from "antd";

import Layout from "../../Layout/Layout";
import ProductsPage from "../ProductsPage";
import BreadCrumbs from "../../Components/bread_crumbs/index";

const ProductsCom = () => {
  return (
    <Layout>
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <BreadCrumbs />
        </Col>
      </Row>
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <ProductsPage />
        </Col>
      </Row>
    </Layout>
  );
};

export default ProductsCom;
