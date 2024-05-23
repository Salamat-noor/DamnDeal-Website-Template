import React from "react";
import { Row, Col } from "antd";

//! ***************   PAGE ADD ONs BG  ******************
import bgOne from "../Assets/IMAGES/Headphones.svg";
import bgTwo from "../Assets/IMAGES/pageAddTwo.svg";
//! ***************   PAGE ADD ONs BG  ******************

//****************   COMPONENTS  ******************
import Hero from "../Components/hero/index";
import Slider from "../Components/slider";
import Cards from "../Components/best_seller/index";
import PageAdd from "../Components/page_add/index";
import CardsCarousel from "../Components/home_page_card_carousel/index";
import BlogPost from "../Components/blog_posts/index";
import Layout from "../Layout/Layout";

import heroAssets from "../Assets/JSONDATA/HeroAssets";
import {
  pageHeading,
  NavAssets,
  SellerAssets,
} from "../Assets/JSONDATA/BestSellerAssets";
import {
  pageHeadingTV,
  NavAssetsTV,
  seeOnTvAssets,
} from "../Assets/JSONDATA/SeeontvAssets";
import {
  pageHeadingShopC,
  NavAssetsShopC,
  shopCategoriesAssetsOne,
  shopcategoriesAssetsTwo,
} from "../Assets/JSONDATA/ShopCategoriesAssets";
import { blogAssets } from "../Assets/JSONDATA/BlogPostAssets";
import MajorSavingsAssets from "../Assets/JSONDATA/CardAssets";
import SliderDetails from "../Assets/JSONDATA/SliderAsssets";
import {
  pageHeadingTopR,
  NavAssetsTopR,
  RatedProductAssets,
} from "../Assets/JSONDATA/RatedProductAssets";

const HomePage = () => {
  return (
    <Layout>
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <Hero heroAssetsdata={heroAssets} />
          <Slider JSONDATA={SliderDetails} />
          <Cards JSONDATA={MajorSavingsAssets} />
          <CardsCarousel
            pageHeading={pageHeading}
            JSONData={SellerAssets}
            NavAssets={NavAssets}
          />
          <PageAdd bg={bgOne} />
          <CardsCarousel
            pageHeading={pageHeadingTV}
            JSONData={seeOnTvAssets}
            NavAssets={NavAssetsTV}
          />
          <CardsCarousel
            pageHeading={pageHeadingShopC}
            JSONData={shopCategoriesAssetsOne}
            NavAssets={NavAssetsShopC}
          />
          <CardsCarousel JSONData={shopcategoriesAssetsTwo} />
          <PageAdd bg={bgTwo} />
          <CardsCarousel
            pageHeading={pageHeadingTopR}
            JSONData={RatedProductAssets}
            NavAssets={NavAssetsTopR}
          />
          <BlogPost JSONDATA={blogAssets} />
        </Col>
      </Row>
    </Layout>
  );
};

export default HomePage;
