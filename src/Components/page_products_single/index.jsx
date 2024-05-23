import React, { useState } from "react";

// ! Third Party Dependencies...
import { Col, Row, Collapse, Table } from "antd";
import { Link, useNavigate } from "react-router-dom";
// ! Third Party Dependencies...

// ? SubComponents ...
import ReviewsComp from "./Assets/ReviewsComp";
import AddAReview from "./Assets/AddAReview";
import CardsCarousel from "../home_page_card_carousel/index";
// ? SubComponents ...

// * Page Assets ...
import {
  search_Icon,
  FAQAssets,
  MarkeetingDetails,
  VendorAccordionAssets,
  StartICON,
  HowManyReviews,
  columns,
  data,
} from "../../Assets/JSONDATA/PageFiveAssets";

import {
  NavAssets,
  SellerAssets,
} from "../../Assets/JSONDATA/BestSellerAssets";
// * Page Assets ...

import "./ShopPageSingleStyles.css";

const toggleFulScreen = {
  width: "100%",
  height: "100vh",
  position: "fixed",
  zIndex: "9",
  top: "0",
  left: "0",
  backgroundColor: "#000",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const { Panel } = Collapse;

const PanelOne = (props) => {
  return (
    <Collapse bordered={false} defaultActiveKey={["1"]}>
      <Panel header={props.title} key={props.chabi} id={props.id}>
        {props.children}
      </Panel>
    </Collapse>
  );
};
const ShopPageSingleComp = ({ ProductData, samplePicOne }) => {
  const Navigate = useNavigate();
  const [countProduct, setCountProduct] = useState(1);
  const [defaultImg, setDefaultImg] = useState(ProductData.src);
  const [toggleImgWidth, setToggleImgWidth] = useState(null);
  const [x, setX] = useState(0);

  const handleCartPage = () => {
    Navigate(`/shoppingcart`, {
      state: { product: ProductData },
    });
  };

  const chooseImg = (e) => {
    setDefaultImg(e.target.src);
  };

  const HandleImageSize = () => {
    if (x === 0) {
      setToggleImgWidth(toggleFulScreen);
      setX(1);
    } else {
      setToggleImgWidth(null);
      setX(0);
    }
  };

  return (
    <Row id="ShopSinglePageRow" gutter={[10, 10]} justify={"space-between"}>
      <Col xs={24} md={4} lg={2} className="ShopSingleCol">
        <div id="ShopSingleDivisionOne">
          <div id="ShopSingleImg1">
            <img
              onClick={chooseImg}
              src={ProductData.src}
              alt={ProductData.title}
              width={"100%"}
            />
          </div>
          <div id="ShopSingleImg1">
            <img
              onClick={chooseImg}
              src={
                samplePicOne[Math.floor(Math.random() * samplePicOne.length)]
              }
              alt={ProductData.title}
              width={"100%"}
            />
          </div>
          <div id="ShopSingleImg1">
            <img
              onClick={chooseImg}
              src={
                samplePicOne[Math.floor(Math.random() * samplePicOne.length)]
              }
              alt={ProductData.title}
              width={"100%"}
            />
          </div>
        </div>
      </Col>

      <Col xs={24} md={20} lg={14} className="ShopSingleCol">
        <div id="ShopSingleMainImg" style={toggleImgWidth}>
          <div id="resizeImg" onClick={HandleImageSize}>
            <span>[ ]</span>
          </div>

          <img
            src={defaultImg}
            alt={ProductData.title}
            height={"auto"}
            width={"100%"}
          />

          <p>Roll over image to zoom in</p>
        </div>
      </Col>

      <Col xs={24} md={24} lg={8} className="ShopSingleCol">
        <div id="ShopSingleDivisoinThree">
          <div id="DiviThreePart1">
            <div className="brandPlusReviews">
              <div id="brandShopSingle">
                <b>{ProductData.brand}</b>
              </div>

              <div id="reviewsShopSingle">
                {[...Array(5)].map((_, index) => (
                  <img key={index} src={ProductData.rateStar} alt="" />
                ))}

                <p>{ProductData.reviews}</p>
              </div>
            </div>

            <div id="titleShopSinglePage">
              <h1>{ProductData.title}</h1>
            </div>
          </div>
          <div id="DiviThreePart2">
            <div id="pricingDetailsShopSingle">
              <strong>{ProductData.price}</strong>
              <s>{ProductData.saledprice}</s>
            </div>

            <div id="ShopSingleAddToCart">
              <div id="CountProduct">
                <button
                  type="button"
                  onClick={() =>
                    countProduct === 1
                      ? setCountProduct(1)
                      : setCountProduct(countProduct - 1)
                  }
                >
                  -
                </button>
                <span>{countProduct}</span>
                <button
                  type="button"
                  onClick={() => setCountProduct(countProduct + 1)}
                >
                  +
                </button>
              </div>
              <div id="AddToCart">
                <button type="button" onClick={handleCartPage}>
                  Add to cart
                </button>
              </div>
            </div>
            <div id="BuyNow">
              <button type="button">Buy Now</button>
            </div>
            <div id="FAQs">
              {FAQAssets.map((el) => (
                <div className="faqBox" key={el.id}>
                  <img src={el.src} alt="" />
                  <strong>{el.title}</strong>
                </div>
              ))}
            </div>
          </div>
          <div id="DiviThreePart3">
            <div className="markeetDetails" id="MarkeetDetailsOne">
              <div className="markeetLogo">
                <img src={MarkeetingDetails[0].src} alt="" />
              </div>
              <div className="markeetText">
                <p>
                  Free shipping, <b>arrives by Thu, Jun 2</b> to Sacramento,
                  95829
                </p>
                <p>
                  <b>Want it faster?</b>{" "}
                  <span id="addAnAddress">Add an address</span> to see options
                </p>
                <div id="markeetingBTN">
                  <button>More options</button>
                </div>
              </div>
            </div>

            <div className="markeetDetails" id="MarkeetDetailsTwo">
              <div className="markeetLogo">
                <img src={MarkeetingDetails[1].src} alt="" />
              </div>
              <div className="markeetText">
                <p>Sold and shipped by </p>
                <p>
                  <b>TFN-STORE | TUFAN STORE LLC Fulfilled by Zenmart</b>
                </p>
                <div id="markeetingBTN">
                  {[...Array(5)].map((_, index) => (
                    <img
                      key={index}
                      src={MarkeetingDetails[1].btnMoreStar}
                      alt="Advertise"
                    />
                  ))}
                  <span>965 seller reviews</span>
                </div>
              </div>
            </div>

            <div className="markeetDetails" id="MarkeetDetailsThree">
              <div className="markeetLogo">
                <img src={MarkeetingDetails[2].src} alt="" />
              </div>
              <div className="markeetText">
                <p>Free 15-Day returns</p> <button>Details</button>
              </div>
            </div>
          </div>
          <div id="DiviThreePart4">
            <div id="MoreSellerOptions">
              <h2>More seller options (2)</h2>
              <p>Starting from $1,249.00</p>
              <button>Compare all sellers</button>
            </div>
          </div>
        </div>
      </Col>

      <Col xs={24} md={20} lg={16} className="ShopSingleCol">
        <div id="OverViewContent">
          <h1>Overview</h1>
          <p>
            The first notebook of its kind, this Apple MacBook Pro is a beast.
            With the blazing-fast M1 Pro chip — the first Apple silicon designed
            for pros — you get groundbreaking performance and amazing battery
            life. Add to that a stunning Liquid Retina XDR display, the best
            camera and audio ever in a Mac notebook, and all the ports you need.
          </p>
          <button type="button">See More 🔽</button>
        </div>
      </Col>

      {/* //? Accordians */}
      <Col xs={24} md={20} lg={16}>
        <PanelOne title={"More Information"} chabi={"1"}>
          <PanelOneSpecs />
        </PanelOne>

        <PanelOne title={"Details & Specs"} chabi={"2"}>
          <Table columns={columns} dataSource={data} />
        </PanelOne>

        <PanelOne title={"What's Included"} chabi={"3"}>
          <PanelThreeSpecs />
        </PanelOne>

        <PanelOne title={"Vendor"} chabi={"4"}>
          <PanelFourSpecs />
        </PanelOne>

        <PanelOne
          title={"Shipping and Returns"}
          chabi={"5"}
          id={"shippingndReturnPanel"}
        >
          <PanelFiveSpecs />
        </PanelOne>

        <PanelOne title={"Questions and Answers"} chabi={"6"}>
          <PanelSixSpecs />
        </PanelOne>

        <PanelOne title={"Customer Reviews"} chabi={"7"}>
          <PanelSevenSpecs />
        </PanelOne>
      </Col>

      <Col xs={24}>
        <div id="RelatedProducts">
          <CardsCarousel
            pageHeading={"Related products"}
            JSONData={SellerAssets}
            NavAssets={NavAssets}
          />
        </div>

        <div id="UMi8AlsoLike">
          <CardsCarousel
            pageHeading={"You may also like…"}
            JSONData={SellerAssets}
            NavAssets={NavAssets}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ShopPageSingleComp;

const PanelOneSpecs = () => {
  return (
    <>
      <h1 className="antCollapseHeading">Powerful performance</h1>
      <ul className="antCollapseList">
        <li>English-language MacBook Pro</li>
        <li>
          10-core Apple M1 Pro chip for a giant leap in CPU, GPU, and machine
          learning performance
        </li>
        <li>16GB of RAM so everything you do is fast and fluid</li>
        <li>16-core Neural Engine for advanced machine learning</li>
        <li>16-core GPU</li>
        <li>
          Ultrafast 1TB solid state drive (SSD) is blazing fast, so you can take
          all your photos and videos with you no matter.
        </li>
      </ul>
      <h1 className="antCollapseHeading">Display and audio</h1>
      <ul className="antCollapseList">
        <li>
          16.2-inch liquid retina XDR display delivers a responsive and natural
          viewing experience
        </li>
        <li>
          3456 x 2234 native resolution with support for millions of colours
        </li>
        <li>ProMotion technology for adaptive refresh rates up to 120Hz</li>
        <li>
          Studio-quality three-mic array with high signal-to-noise ratio and
          directional beamforming
        </li>
        <li>
          High fidelity six speaker sound system with forece-cancelling woofers
        </li>
      </ul>
    </>
  );
};

const PanelThreeSpecs = () => {
  return (
    <ul className="antCollapseList">
      <li>16-inch MacBook Pro</li>
      <li>140W USB‑C Power Adapter</li>
      <li>USB‑C to MagSafe 3 Cable (2 m)</li>
    </ul>
  );
};

const PanelFourSpecs = () => {
  return (
    <Row justify={"space-between"} gutter={[5, 10]}>
      {VendorAccordionAssets.map((e) => (
        <Col xs={24} sm={11} key={e.id} id="vendorPanelCol">
          <div id="ReviewsPlusBrandVendorB">
            <h1>{e.title}</h1>
            {[...Array(5)].map((_, index) => (
              <img src={e.src} key={index} alt={"star " + index} />
            ))}
            <p>{e.sellerReviews}</p>
          </div>
          <div id="NextContentParaVendor">
            <p>{e.paraOne}</p>
            <p>{e.paraTwo}</p>
          </div>
          <div id="PricingPlusPurchaing">
            <div id="PriceVendor">
              <strong>{e.initialprice}</strong>
              <s>{e.saledprice}</s>
            </div>
            <div id="ButtonPurchaseVendor">
              <button type="button">{e.btnText}</button>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

const PanelFiveSpecs = () => {
  return (
    <p id="shippingndReturnPanelPara">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor
      aliquam tortor at suscipit. Etiam accumsan, est id vehicula cursus, eros
      ligula suscipit massa, sed auctor felis mi eu massa. Sed vulputate nisi
      nibh, vel maximus velit auctor nec. Integer consectetur elementum turpis,
      nec fermentum ipsum tempor quis. Praesent a quam congue, egestas erat sit
      amet, finibus justo. Quisque viverra neque vehicula eros gravida
      ultricies. Ut lacinia enim nec consequat tincidunt. Vestibulum ante ipsum
      primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus
      ultricies ornare feugiat. Donec vitae rhoncus sapien, ac aliquet nunc.
    </p>
  );
};

const PanelSixSpecs = () => {
  return (
    <>
      <div id="QandASection">
        <form action="/" method="post">
          <input
            type="search"
            name="searchforQ"
            id="searchforQ"
            placeholder="Have a question? Search for answer"
          />
          <button type="submit">
            {<img src={search_Icon} alt="search" />}
          </button>
        </form>
      </div>

      <div id="SomeQandAns">
        <div className="QuestionsQnA">
          <h3>
            <span>Q:</span> Can dvds be played on apple computers?
          </h3>
          <p id="questionedPersion">
            Asked by Ali Tufan - May 14, 2022 on zenmart.com
          </p>
        </div>

        <div className="AnswersQnA">
          <h3>
            <span>A:</span> If you buy a separate CD/DVD drive.
          </h3>
          <p>Answered by TFN-Store - May 24, 2022</p>
        </div>

        <div className="QuestionsQnA">
          <h3>
            <span>Q:</span> Can dvds be played on apple computers?
          </h3>
          <p id="questionedPersion">
            Asked by Ali Tufan - May 14, 2022 on zenmart.com
          </p>
        </div>

        <div className="AnswersQnA">
          <h3>
            <span>A:</span> If you buy a separate CD/DVD drive.
          </h3>
          <p>Answered by TFN-Store - May 24, 2022</p>
        </div>
      </div>

      <div id="ExploreAllQnA">
        <button type="button">Explore all questions</button>
      </div>
    </>
  );
};

const PanelSevenSpecs = () => {
  return (
    <>
      <div id="CustomerReVvSRtngStr">
        <div id="ReviewRateCustRating">
          <div>
            <h1>4.9</h1>
          </div>
          <div id="RateFiveStars">
            <div id="CustomerReviewStarrate">
              {[...Array(5)].map((_, index) => (
                <img src={StartICON} alt={`rate ${index}`} key={index} />
              ))}
            </div>
            <p>2 reviews</p>
          </div>
        </div>

        <div id="AllRatingReviews">
          <ul>
            <li>
              <span>5 star</span>{" "}
              <div className="coloredRatingstars">
                <div id="colorRating"></div>
              </div>{" "}
              <p>89%</p>
            </li>
            <li>
              <span>4 star</span>{" "}
              <div className="coloredRatingstars">
                <div id="colorRating"></div>
              </div>{" "}
              <p>4%</p>
            </li>
            <li>
              <span>3 star</span>{" "}
              <div className="coloredRatingstars">
                <div id="colorRating"></div>
              </div>{" "}
              <p>3%</p>
            </li>
            <li>
              <span>2 star</span>{" "}
              <div className="coloredRatingstars">
                <div id="colorRating"></div>
              </div>{" "}
              <p>1%</p>
            </li>
            <li>
              <span>1 star</span>{" "}
              <div className="coloredRatingstars">
                <div id="colorRating"></div>
              </div>{" "}
              <p>4%</p>
            </li>
          </ul>
        </div>

        <div id="WriteUrOwnRvv">
          <button type="button">Write Your Review</button>
        </div>
      </div>

      <div id="ReviewsPanelContent">
        <ReviewsComp howmanyReviews={HowManyReviews} />
        <ReviewsComp howmanyReviews={HowManyReviews} />

        <div id="SeeAllReviewsBTN">
          <button type="button">See All Review</button>
        </div>

        <div id="AddReviewForm">
          <AddAReview />
        </div>
      </div>
    </>
  );
};
