import React, { useRef, useState, Fragment } from "react";
import { Grid } from "antd";
import { Card } from "antd";
import { hoverAssets } from "../../Assets/JSONDATA/BestSellerAssets";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

import "./CarouselStyling.css";

const { useBreakpoint } = Grid;

const CardsCarousel = ({ pageHeading, JSONData, NavAssets }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);
  const [filterData, setFilterData] = useState(JSONData);

  const handleNext = () => {
    carouselRef.current.next();
  };

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handelClick = (value) => {
    console.log(value, " value");
    let newFilterData = JSONData.filter((e) => e.category === value.category);
    setFilterData(newFilterData);

    if (value.title === "Top 20" || value.title === "All") {
      return setFilterData(JSONData);
    }
    if (value.title === "Electronic") {
      return setFilterData(JSONData);
    }
  };

  const screens = useBreakpoint();
  const getSlidesToShow = () => {
    if (screens.xxl) return 5;
    if (screens.xl) return 4;
    if (screens.lg) return 3;
    if (screens.md) return 2;
    if (screens.sm) return 2;
    if (screens.xs) return 1;
    return 1;
  };

  const Navigate = useNavigate();

  return (
    <div className="Carousel-Container">
      <nav className="Carousel-Nav">
        <h1 className="Carousel-Heading">{pageHeading ? pageHeading : null}</h1>

        {pageHeading === "Related products" ||
        pageHeading === "You may also like…" ? null : (
          <ul className="Carousel-Links">
            {NavAssets
              ? NavAssets.map((el, index) => (
                  <li key={index} onClick={() => handelClick(el)}>
                    {el.title}
                  </li>
                ))
              : null}
          </ul>
        )}
      </nav>

      <Carousel ref={carouselRef} dots={false} slidesToShow={getSlidesToShow()}>
        {filterData
          ? filterData.map((el, index, array) => (
              <div
                key={index}
                className="card-container"
                onClick={() =>
                  Navigate(`/shoppagesingle/${index}`, {
                    state: { product: el, sample: array },
                  })
                }
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <Card
                  className="Card"
                  hoverable
                  cover={
                    <Fragment>
                      <img alt="example" src={el.src} id="see-on-tv-card-img" />
                      {hoveredIndex === index && (
                        <div id="ShowOnHover">
                          <div id="TopShowOnHovered">
                            {hoverAssets.map((el) => (
                              <div key={el.id} className="showOnHoverImgBox">
                                <img src={el.src} alt={el.id} />
                              </div>
                            ))}
                          </div>
                          <div id="BottomShowOnHovered">
                            <button type="button">Add to Cart</button>
                          </div>
                        </div>
                      )}
                    </Fragment>
                  }
                >
                  <p className="brand">{el.brand}</p>
                  <h3 className="card-title">{el.title}</h3>
                  <div id="ratingdets">
                    {[...Array(5)].map((_, index) => (
                      <img src={el.rating} key={index} alt={`img ${index}`} />
                    ))}
                    <p className="review-para">{el.ratingReview}</p>
                  </div>
                  <div id="pricingDets">
                    <b className="price-initial">{el.discount$}</b>
                    <s className="price-saled">{el.initial$}</s>
                  </div>
                </Card>
              </div>
            ))
          : null}
      </Carousel>

      {pageHeading === "Related products" ||
      pageHeading === "You may also like…" ? null : (
        <>
          <Button
            shape="circle"
            icon={<LeftOutlined />}
            onClick={handlePrev}
            id="NavLeftButton"
          />
          <Button
            shape="circle"
            icon={<RightOutlined />}
            onClick={handleNext}
            id="NavRightButton"
          />{" "}
        </>
      )}
    </div>
  );
};

export default CardsCarousel;
