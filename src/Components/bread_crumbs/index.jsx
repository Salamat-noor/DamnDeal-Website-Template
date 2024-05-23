import React from "react";
import "./BreadCrumbStyles.css";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  ProductOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Breadcrumb } from "antd";

const BreadCrumbs = () => {
  return (
    <Breadcrumb
      items={[
        {
          title: (
            <Link to={"/"}>
              <HomeOutlined />
            </Link>
          ),
        },
        {
          title: (
            <>
              <ProductOutlined />
              <Link to={"/products"}>Products</Link>
            </>
          ),
        },
        {
          title: (
            <>
              <ShoppingCartOutlined />
              <Link to={"/shoppage"}>Shop Now</Link>
            </>
          ),
        },
      ]}
    />
  );
};

export default BreadCrumbs;
