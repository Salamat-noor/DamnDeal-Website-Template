import styled, { css } from "styled-components";
import { Row, Col } from "antd";

// ? Helper's..................................
const Display_Flex = css`
  display: flex;
`;
const Align_Items_Flex_Start = css`
  align-items: flex-start;
`;
const Align_Items_center = css`
  align-items: center;
`;
const Justify_Between = css`
  justify-content: space-between;
`;
const Flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FlexColumn = css`
  flex-direction: column;
`;
const Gap_1_rem = css`
  gap: 1rem;
`;
const Width_Full = css`
  width: 100%;
`;
const Width_15_px = css`
  width: 15px;
`;
const Height_auto = css`
  height: auto;
`;
const Margin_Top_25_px = css`
  margin-top: 25px;
`;
const Margin_Bottom_25_px = css`
  margin-top: 25px;
`;
const Margin_0 = css`
  margin: 0;
`;
const Font_Size_1_rem = css`
  font-size: 1rem;
`;
const Font_Size_13_px = css`
  font-size: 13px;
`;
const Font_Weight_500 = css`
  font-weight: 500;
`;
const Line_Height_40_px = css`
  line-height: 40px;
`;
const Border_Radius_6_px = css`
  border-radius: 6px;
`;
const Color_Black = css`
  color: #000;
`;
// ? Helper's..................................

// ! Custom Tags ???????????????????????????
export const Footer = styled.div`
  width: 100%;
  ${Height_auto};
  background: #f3f5f6;
  margin-top: 25px;
`;
export const FooterSubscribeRow = styled(Row)`
  ${Margin_Top_25_px};
`;
export const FooterMenuRow = styled(Row)`
  ${Margin_Top_25_px};
`;
export const FooterSubscribeCol = styled(Col)`
  ${Flex};
  padding: 10px 0px;
`;
export const FooterHeading = styled.h1`
  ${Font_Weight_500};
  ${Line_Height_40_px};
  font-size: 2rem;

  @media (max-width: 426px) {
    font-size: 18px;
  }
`;
export const FooterSubscribeForm = styled.form`
  ${Flex};
  ${Gap_1_rem};

  @media (max-width: 426px) {
    ${FlexColumn};
  }
`;
export const InputEmail = styled.input`
  width: 310px;
  height: 45px;
  background-color: #ffffff;
  padding: 9px 12px;
  border: 1px solid #eaeaea;
  ${Border_Radius_6_px};
  ${Color_Black};

  @media (max-width: 426px) {
    width: 280px;
    height: 25px;
  }
`;
export const SubmitBTN = styled.input`
  background: #f5c34b;
  border: 1px solid #f5c34b;
  font-size: medium;
  width: fit-content;
  padding: 4px 5px;
  height: 35px;
  ${Border_Radius_6_px};
  ${Color_Black};

  @media (max-width: 426px) {
    padding: 10px 12px;
  }
`;
export const FooterMenuColumn = styled(Col)`
  height: fit-content;
  text-align: left;
  margin: 10px 0px;
  ${Display_Flex};
  ${FlexColumn};
  ${Align_Items_Flex_Start};
  ${Gap_1_rem};

  @media (max-width: 767.5px) {
    text-align: center;
    ${Margin_Bottom_25_px};
    ${Margin_Top_25_px};
    ${Align_Items_center};
  }
`;
export const FooterMenuColumnHeading = styled.h1`
  font-size: 1.2rem;
  ${Font_Weight_500};

  @media (max-width: 1025px) {
    font-size: 16px;
  }
  @media (max-width: 767.5px) {
    font-size: 1.5rem;
  }
  @media (max-width: 426px) {
    font-size: 24px;
  }
`;
export const FooterMenuColumnContent = styled.div`
  color: #041e42;
  padding: 0 4px !important;
  gap: 25px;
  ${Align_Items_Flex_Start};
  ${FlexColumn};
  ${Display_Flex};

  @media (max-width: 767.5px) {
    ${Align_Items_center};
  }

  p {
    cursor: pointer;
    font-weight: 400;
    ${Font_Size_1_rem};

    @media (max-width: 1441px) {
      ${Font_Size_13_px};
    }
  }
`;
export const FooterMenuColumnOneContent = styled.div`
  padding: 0;
  margin-bottom: 12px;
  ${Flex};
  ${Gap_1_rem};

  .FootercontentTxT {
    p {
      ${Font_Size_1_rem};

      @media (max-width: 1441px) {
        font-size: 12px;
      }
      @media (max-width: 1025px) {
        font-size: 9px;
      }
    }
    .textBold {
      ${Font_Weight_500};
    }
  }
`;
export const FooterMenuColumnOneContentImgDiv = styled.div`
  width: 30px;
  overflow: hidden;

  img {
    object-fit: cover;
    ${Width_Full};
    ${Height_auto};
  }
`;
export const FooterMenuColumnFiveImgDiv = styled.div`
  ${Gap_1_rem};
  ${Flex};

  img {
    ${Width_15_px};
  }
`;
export const FooterMenuColumnFiveH3 = styled.h3`
  ${Font_Size_1_rem};
  ${Font_Weight_500};
`;
export const FooterMenuColumnFiveMobileBrands = styled.div`
  ${Flex};
  ${Gap_1_rem};
  ${Font_Size_1_rem};
  ${Font_Weight_500};

  img {
    ${Width_15_px};
  }
`;
export const FooterMenuColumnFiveWeAcceptHeading = styled.h4`
  ${Font_Size_1_rem};
  ${Font_Weight_500};
`;
export const FooterMenuColumnFiveWeAcceptImages = styled.div`
  ${Flex};
  gap: 8px;

  img {
    width: 25px;
  }
`;
export const FooterLastColumn = styled(Col)`
  border-top: 1px solid #cecece;
  ${Display_Flex};
  ${Align_Items_center};
  ${Justify_Between};

  @media (max-width: 426px) {
    ${FlexColumn};
    ${Gap_1_rem};
  }
`;
export const FooterLastColumnLeftSide = styled.div`
  justify-content: flex-start;
  ${Display_Flex};
  ${Align_Items_center};
  ${Width_Full};
  ${Gap_1_rem};

  @media (max-width: 426px) {
    ${Justify_Between};
    ${FlexColumn};
  }

  h6 {
    ${Font_Weight_500};
    ${Font_Size_1_rem};
    ${Margin_0};

    @media (max-width: 1025px) {
      font-size: 0.8rem;
    }
  }

  ul {
    ${Flex};
    ${Margin_0};
    ${Gap_1_rem};

    @media (max-width: 1025px) {
      gap: 1.5rem;
    }

    li {
      list-style-position: inside;
      ${Font_Size_1_rem};

      &:nth-child(1) {
        list-style: none;
      }

      @media (max-width: 1025px) {
        font-size: 0.7rem;
        list-style-position: outside;
      }
      @media (max-width: 767.5px) {
        font-size: 0.7rem;
      }
    }
  }
`;
export const FooterLastColumnRightSide = styled.div`
  justify-content: flex-end;
  ${Display_Flex};
  ${Align_Items_center};
  ${Width_Full};
  ${Gap_1_rem};

  @media (max-width: 426px) {
    justify-content: center;
  }
`;
// ! Custom Tags ???????????????????????????
