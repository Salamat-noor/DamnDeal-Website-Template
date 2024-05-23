import styled, { css } from "styled-components";
import { Col } from "antd";

// ? Helper's........................
const Flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FlexColumn = css`
  flex-direction: column;
`;
const Margin = css`
  margin: 10px 0px;
`;
const WidthFull = css`
  width: 100%;
`;
// ? Helper's........................

// ! Custom Tags ????????????????????????
export const Slider = styled.div`
  ${Margin}
`;
export const Column = styled(Col)`
  ${Flex}
  gap: 5px;
  font-size: 12px;

  @media (max-width: 991.5px) {
    ${FlexColumn};
    ${Margin}
    padding: 15px;
  }
`;
export const ColumnInnerDivision = styled.div`
  width: 60px;
  height: 60px;
  ${Flex};
  padding: 5px;
  border-radius: 50%;

  @media (max-width: 991.5px) {
    width: 100px;
    height: 100px;
    background-color: rgb(198, 198, 198);
  }

  img {
    ${WidthFull};
    height: auto;
    object-fit: contain;

    @media (max-width: 991.5px) {
      ${WidthFull};
      height: 100%;
    }
  }
`;
// ! Custom Tags ????????????????????????
