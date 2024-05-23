import React from "react";
import styled from "styled-components";
import { Button, Dropdown, Menu } from "antd";
import { UpOutlined } from "@ant-design/icons";

const DropDownFooter = (props) => {
  const menu = (
    <Menu>
      <Menu.Item key="1">{props.currencyTwo}</Menu.Item>
      <Menu.Item key="2">{props.currencyOne}</Menu.Item>
    </Menu>
  );

  return (
    <DropDown
      overlay={menu}
      placement="bottom"
      arrow={{ pointAtCenter: true }}
      className="footerDrop"
    >
      <Button>
        {props.title}
        {props.default} <UpOutlined />
      </Button>
    </DropDown>
  );
};

export default DropDownFooter;

const DropDown = styled(Dropdown)`
  font-size: 1rem !important;

  @media (max-width: 1025px) {
    font-size: 0.7rem !important;
  }
`;
