import styled from "styled-components";

const CustomBRLine = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  .colors {
    width: 100%;
    height: 3px;
  }
  .colors:nth-child(1) {
    background: #f5c34b;
  }
  .colors:nth-child(2) {
    background: #6bd68d;
  }
  .colors:nth-child(3) {
    background: #ec752f;
  }
  .colors:nth-child(4) {
    background: #f5c34b;
  }
  .colors:nth-child(5) {
    background: #6bd68d;
  }
`;

export default CustomBRLine;
