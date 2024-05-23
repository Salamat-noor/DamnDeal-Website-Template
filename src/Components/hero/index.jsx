import React, { useRef } from "react";

import { Link } from "react-router-dom";
import { Carousel, Button } from "antd";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

import * as CustomTag from "./Styles";

const Hero = ({ heroAssetsdata, place }) => {
  const carouselRef = useRef(null);
  const handleNext = () => {
    carouselRef.current.next();
  };
  const handlePrev = () => {
    carouselRef.current.prev();
  };

  return (
    <React.Fragment>
      <CustomTag.StyledHeroContainer>
        <Carousel ref={carouselRef} dots={false}>
          {heroAssetsdata &&
            heroAssetsdata.map((el, index) => (
              <CustomTag.StyledCContainer key={index} $place={place}>
                {el.src && <img src={el.src} alt="" />}
                <div
                  className={`${
                    el.title && el.title === "Modern"
                      ? "content"
                      : "anotherContent"
                  }`}
                >
                  <CustomTag.StyledInnerContent $place={place}>
                    {el.limitedEdition && <h3>{el.limitedEdition}</h3>}
                    {el.title && <h1>{el.title}</h1>}
                    {el.titleTwo && <h1>{el.titleTwo}</h1>}
                    {el.para && <p>{el.para}</p>}
                    <Link to={"/products"}>
                      {el.shopNow && (
                        <CustomTag.StyledHeroBTN>
                          {el.shopNow}
                        </CustomTag.StyledHeroBTN>
                      )}
                    </Link>
                  </CustomTag.StyledInnerContent>
                </div>
              </CustomTag.StyledCContainer>
            ))}
        </Carousel>

        <Button
          shape="circle"
          icon={<LeftOutlined />}
          onClick={handlePrev}
          className="slide-btn left-slide"
        />
        <Button
          shape="circle"
          icon={<RightOutlined />}
          onClick={handleNext}
          className="slide-btn right-slide"
        />
      </CustomTag.StyledHeroContainer>
    </React.Fragment>
  );
};
export default Hero;
