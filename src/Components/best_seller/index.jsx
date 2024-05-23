import React from "react";
import { Row, Col } from "antd";
import { Card } from "antd";

import { StyledCard } from "./styles";

const { Meta } = Card;

const Cards = ({ JSONDATA }) => {
  return (
    <StyledCard>
      <Row>
        <Col xs={24} className="card-heading">
          <h1 className="SectionHeading">Major Savings</h1>
        </Col>
        {JSONDATA.map((el, index) => (
          <Col key={index} xs={24} sm={12} md={12} lg={8} className="CardsCol">
            <Card hoverable cover={<img alt="example" src={el.src} />}>
              <Meta title={el.title} />
            </Card>
          </Col>
        ))}
      </Row>
    </StyledCard>
  );
};

export default Cards;
