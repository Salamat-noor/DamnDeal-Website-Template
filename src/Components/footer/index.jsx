import React from "react";
import { Row, Col } from "antd";
import phoneCall from "../../Assets/IMAGES/phone-call.svg";
import mailPic from "../../Assets/IMAGES/FooterMailPic.svg";
import DropDownFooter from "./Assets/DropDownFooter";
import * as CustomTag from "./style";

const Footer = ({ socialAssets, itTechAssets, weAcceptAssets }) => {
  return (
    <CustomTag.Footer>
      <Row justify={"center"}>
        <Col xs={24} md={20}>
          <CustomTag.FooterSubscribeRow>
            <CustomTag.FooterSubscribeCol xs={24}>
              <CustomTag.FooterHeading>
                Subscribe and get 20% discount.
              </CustomTag.FooterHeading>
            </CustomTag.FooterSubscribeCol>
            <CustomTag.FooterSubscribeCol xs={24}>
              <CustomTag.FooterSubscribeForm action="#">
                <CustomTag.InputEmail
                  type="email"
                  name="userEmail"
                  id="userEmail"
                  placeholder="Your email address"
                />
                <label htmlFor="userEmail">
                  <CustomTag.SubmitBTN type="submit" value="Subscribe" />
                </label>
              </CustomTag.FooterSubscribeForm>
            </CustomTag.FooterSubscribeCol>
          </CustomTag.FooterSubscribeRow>
          {/*  // ************************************************* // */}
          <CustomTag.FooterMenuRow justify={"space-between"}>
            <CustomTag.FooterMenuColumn xs={24} sm={12} md={7} lg={6}>
              <CustomTag.FooterMenuColumnHeading>
                Contact Us
              </CustomTag.FooterMenuColumnHeading>
              <CustomTag.FooterMenuColumnContent>
                <CustomTag.FooterMenuColumnOneContent>
                  <CustomTag.FooterMenuColumnOneContentImgDiv>
                    <img src={phoneCall} alt="phone" />
                  </CustomTag.FooterMenuColumnOneContentImgDiv>
                  <div className="FootercontentTxT">
                    <p className="textBold">Monday-Friday: 08am-9pm</p>
                    <p>+(1) 123 456 7890</p>
                  </div>
                </CustomTag.FooterMenuColumnOneContent>
                {/* //////////////////////////////////////////////////////////////// */}
                <CustomTag.FooterMenuColumnOneContent>
                  <CustomTag.FooterMenuColumnOneContentImgDiv>
                    <img src={mailPic} alt="phone" />
                  </CustomTag.FooterMenuColumnOneContentImgDiv>
                  <div className="FootercontentTxT">
                    <p className="textBold">Need help with your order?</p>
                    <p>support@damndeal.com</p>
                  </div>
                </CustomTag.FooterMenuColumnOneContent>
              </CustomTag.FooterMenuColumnContent>
            </CustomTag.FooterMenuColumn>
            <CustomTag.FooterMenuColumn xs={24} sm={12} md={5} lg={4}>
              <CustomTag.FooterMenuColumnHeading>
                About Zenmart
              </CustomTag.FooterMenuColumnHeading>
              <CustomTag.FooterMenuColumnContent>
                <p>Track Your Order</p>
                <p className="productGuidesPara">Product Guides</p>
                <p>Wishlists</p>
              </CustomTag.FooterMenuColumnContent>
            </CustomTag.FooterMenuColumn>
            <CustomTag.FooterMenuColumn xs={24} sm={12} md={7} lg={4}>
              <CustomTag.FooterMenuColumnHeading>
                Customer Support
              </CustomTag.FooterMenuColumnHeading>
              <CustomTag.FooterMenuColumnContent>
                <p>Contact Us</p>
                <p>Help Centre</p>
              </CustomTag.FooterMenuColumnContent>
            </CustomTag.FooterMenuColumn>
            <CustomTag.FooterMenuColumn xs={24} sm={12} md={5} lg={4}>
              <CustomTag.FooterMenuColumnHeading>
                Services
              </CustomTag.FooterMenuColumnHeading>
              <CustomTag.FooterMenuColumnContent>
                <p>Trade-In Program</p>
                <p>Electronics Recycling</p>
                <p>Best Buy Health</p>
              </CustomTag.FooterMenuColumnContent>
            </CustomTag.FooterMenuColumn>
            <CustomTag.FooterMenuColumn xs={24} md={12} lg={5}>
              <CustomTag.FooterMenuColumnHeading>
                Follow us
              </CustomTag.FooterMenuColumnHeading>
              <CustomTag.FooterMenuColumnContent>
                <CustomTag.FooterMenuColumnFiveImgDiv>
                  {socialAssets.map((el) => (
                    <img src={el.src} alt="" key={el.id} />
                  ))}
                </CustomTag.FooterMenuColumnFiveImgDiv>
                <CustomTag.FooterMenuColumnFiveH3>
                  Mobile Apps
                </CustomTag.FooterMenuColumnFiveH3>
                {itTechAssets.map((el) => (
                  <CustomTag.FooterMenuColumnFiveMobileBrands key={el.id}>
                    <img src={el.src} alt="" />
                    <p>{el.title}</p>
                  </CustomTag.FooterMenuColumnFiveMobileBrands>
                ))}
                <CustomTag.FooterMenuColumnFiveWeAcceptHeading>
                  We accept
                </CustomTag.FooterMenuColumnFiveWeAcceptHeading>
                <CustomTag.FooterMenuColumnFiveWeAcceptImages>
                  {weAcceptAssets.map((el) => (
                    <img src={el.src} alt="" key={el.id} />
                  ))}
                </CustomTag.FooterMenuColumnFiveWeAcceptImages>
              </CustomTag.FooterMenuColumnContent>
            </CustomTag.FooterMenuColumn>
          </CustomTag.FooterMenuRow>
          {/*  // ************************************************* // */}
          <Row>
            <CustomTag.FooterLastColumn xs={24}>
              <CustomTag.FooterLastColumnLeftSide>
                <h6>© 2022 Zeomart. All Rights Reserved</h6>
                <ul>
                  <li>Privacy</li>
                  <li>Terms</li>
                  <li>Sitemap</li>
                </ul>
              </CustomTag.FooterLastColumnLeftSide>
              <CustomTag.FooterLastColumnRightSide>
                <DropDownFooter
                  title={"Currency "}
                  default={"USD"}
                  currencyOne={"Rupees"}
                  currencyTwo={"Dirham"}
                />
                <DropDownFooter
                  title={"Language "}
                  default={"English"}
                  currencyOne={"Spanish"}
                  currencyTwo={"Russian"}
                />
              </CustomTag.FooterLastColumnRightSide>
            </CustomTag.FooterLastColumn>
          </Row>
        </Col>
      </Row>
    </CustomTag.Footer>
  );
};

export default Footer;
