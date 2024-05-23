import React from "react";
import { Row } from "antd";
import * as CustomTag from "./style";
// import "./Slider.css";

const Slider = ({ JSONDATA }) => {
  return (
    <CustomTag.Slider className="Slider">
      <Row className="SliderRow" justify={"space-between"}>
        {JSONDATA.map((el) => (
          <CustomTag.Column xs={12} sm={5} lg={3} key={el.id}>
            <CustomTag.ColumnInnerDivision id="innerDivisionSliderCol">
              <img src={el.src} alt="" />
            </CustomTag.ColumnInnerDivision>
            <p>{el.title}</p>
          </CustomTag.Column>
        ))}
      </Row>
    </CustomTag.Slider>
  );
};

export default Slider;
