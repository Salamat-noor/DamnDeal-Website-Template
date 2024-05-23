import React from "react";
import styled from "styled-components";

import {
  StyledTableWrapper,
  StyledTable,
  StyledProduct,
  RemoveButton,
  StyledCartTotal,
  StyledCartTotalDetails,
  StyledTotal,
  StyledButton,
  StyledCartAssets,
} from "./style";
import Button from "../(key_components)/button";
import { Card, Row, Col } from "antd";
const { Meta } = Card;

const Index = ({ data }) => {
  const dataSource = [
    {
      key: "1",
      product: {
        title: data.title,
        brand: data.brand,
        category: data.category,
        src: data.src,
      },
      price: data.initial$ || data.price,
      quantity: data.quantity || 1,
      total: `$${(data.initial$ || data.price) * (data.quantity || 1)}`,
    },
  ];

  return (
    <StyledRow justify={"space-between"} gutter={[10, 10]}>
      <Col xs={24} md={17}>
        <StyledTableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {dataSource.map((item) => (
                <tr key={item.key}>
                  <td>
                    <StyledProduct>
                      <div className="image-container">
                        <img src={item.product.src} alt={item.product.title} />
                      </div>
                      <div className="details">
                        <Meta description={item.product.title} />
                        <h5>{item.product.brand}</h5>
                        <h5>{item.product.category}</h5>
                      </div>
                    </StyledProduct>
                  </td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.total}</td>
                  <td>
                    <RemoveButton>X</RemoveButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </StyledTableWrapper>
        <StyledCartAssets>
          <div id="leftCartAssets">
            <div id="couponCode">
              <p>Coupon code</p>
              <button>Apply Coupon</button>
            </div>
          </div>
          <div id="rightCartAssets">
            <div id="continue-shopping">
              <Button
                title={"Continue Shopping"}
                innertext={"Continue Shopping"}
              />
            </div>
            <div id="update-cart">
              <Button title={"Update Cart"} />
            </div>
          </div>
        </StyledCartAssets>
      </Col>
      <Col xs={24} md={7}>
        <StyledCartTotal>
          <h3>Cart Total</h3>
          <StyledCartTotalDetails>
            <div>
              <p>Product Subtotal</p>
              <h6>{4 + 5}</h6>
            </div>
            <div>
              <p>Order Discounts</p>
              <h6>{4 + 5}</h6>
            </div>
            <div>
              <p>Estimated Shipping</p>
              <h6>{4 + 5}</h6>
            </div>
            <div>
              <p>Estimated Taxes</p>
              <h6>{4 + 5}</h6>
            </div>
          </StyledCartTotalDetails>
          <StyledTotal>
            <h3>Total</h3>
            <h4>{2 + 4}</h4>
          </StyledTotal>
          <StyledButton>
            <Button
              title={"Proceed to checkout"}
              innertext={"Proceed to checkout"}
            />
          </StyledButton>
        </StyledCartTotal>
      </Col>
    </StyledRow>
  );
};

export default Index;

const StyledRow = styled(Row)`
  margin: 2rem 0;
`;
