import React from "react";

import { useLocation } from "react-router-dom";
import { Col, Row } from "antd";

import Layout from "../Layout/Layout";
import BreadCrumbs from "../Components/bread_crumbs/index";
import ShopPageSingleComp from "../Components/page_products_single/index";

const ShopPageSingle = () => {
  const location = useLocation();
  const product = location.state.product;
  const sample = location.state.sample;

  let pics = sample.map((e) => e.src);

  return (
    <Layout>
      <Row justify={"center"}>
        <Col xs={24} md={22}>
          <BreadCrumbs />
          <ShopPageSingleComp ProductData={product} samplePicOne={pics} />
        </Col>
      </Row>
    </Layout>
  );
};

export default ShopPageSingle;
