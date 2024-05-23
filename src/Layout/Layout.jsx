import React from "react";
import { Row, Col } from "antd";
import Screen from "./Screen";
import Footer from "../Components/footer/index";

import "./Layout.css";

import HeaderColoredLinez from "../Components/header_line/index";

import {
  socialAssets,
  itTechAssets,
  weAcceptAssets,
} from "../Assets/JSONDATA/FooterAssets";

const Layout = (props) => {
  return (
    <div id="Layout">
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <Screen />
        </Col>
        <Col xs={24}>
          <HeaderColoredLinez />
        </Col>
      </Row>
      {props.children}
      <Row>
        <Col xs={24}>
          <Footer
            socialAssets={socialAssets}
            itTechAssets={itTechAssets}
            weAcceptAssets={weAcceptAssets}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Layout;
