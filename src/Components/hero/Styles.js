import styled from "styled-components";

export const StyledHeroContainer = styled.div`
  width: 100%;
  height: auto;
  position: relative;
  overflow: hidden;
  margin: 15px 0px;
  border-radius: 6px;

  .slide-btn {
    position: absolute;
    top: 50%;
    background: rgba(255, 255, 255, 0.3);
  }
  .left-slide {
    left: 1%;
    transform: translate(0%, -50%);
  }
  .right-slide {
    right: 1px;
    transform: translate(-50%, -50%);
  }
  @media (max-width: 426px) {
    .slide-btn {
      display: none !important;
    }
  }
`;
export const StyledCContainer = styled.div`
  position: relative;

  > img {
    width: 100%;
    height: ${(props) => (props.$place === "products" ? `50ch` : `70ch`)};
    filter: blur(0.7px);
    object-fit: cover;
  }
  @media (max-width: 426px) {
    > img {
      height: ${(props) => (props.$place === "products" ? `40ch` : `50ch`)};
    }
  }
  .content {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 70%;
    top: 50%;
    transform: translate(-25%, -25%);

    @media (max-width: 769px) {
      left: 67%;
      top: 55%;
    }
    @media (max-width: 426px) {
      left: 0%;
      top: 0%;
      transform: translate(-0%, -0%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0 1rem 0;
    }
  }
  .anotherContent {
    position: absolute;
    left: 12%;
    top: 55%;
    transform: translate(-10%, -55%);

    @media (max-width: 426px) {
      width: 100%;
      height: 100%;
      left: 0%;
      top: 0%;
      transform: translate(-0%, -0%);
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 0 1rem 0;
    }
  }
`;
export const StyledInnerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 1rem;
  color: rgba(255, 255, 255, 1);

  @media (max-width: 426px) {
    align-items: center;
  }

  > h3 {
    background: rgba(206, 203, 226, 1);
    color: rgba(4, 30, 66, 1);
    border-radius: 6px;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    margin: 0 0 1rem 0;

    @media (max-width: 1026px) {
      font-size: 0.7rem;
      padding: 0.3rem 0.7rem;
    }
    @media (max-width: 768px) {
      margin: 0 0 0.5rem 0;
    }
  }

  > h1 {
    font-size: ${(props) => (props.$place === "products" ? `3rem` : `4rem`)};
    line-height: 4rem;
    margin: 0;
    text-align: left;

    @media (max-width: 1026px) {
      font-size: 3rem;
      line-height: 3rem;
    }

    @media (max-width: 769px) {
      font-size: 2.5rem;
      line-height: 2rem;
    }
    @media (max-width: 426px) {
      font-size: 3rem;
      text-align: center;
      line-height: ${(props) =>
        props.$place === "products" ? `4rem` : `2rem`};
    }
    @media (max-width: 376px) {
      font-size: 2.5rem;
    }
  }
  > p {
    margin: 12px 0px;
    font-weight: 400;
    font-size: 1rem;

    @media (max-width: 1026px) {
      font-size: 0.8rem;
    }
    @media (max-width: 426px) {
      font-size: 0.7rem;
    }
    @media (max-width: 376px) {
      font-size: 0.6rem;
    }
  }
`;
export const StyledHeroBTN = styled.button`
  margin: 1rem 0px 0 0;
  padding: 0.9rem 1.5rem;
  border-radius: 6px;
  background: rgba(245, 195, 75, 1);
  border: 1px solid rgba(245, 195, 75, 1);
  font-size: 1rem;
  cursor: pointer;

  @media (max-width: 1025px) {
    font-size: 0.8rem;
    margin: 0.5rem 0px 0 0;
    padding: 0.5rem 1rem;
  }
  @media (max-width: 768px) {
    margin: 0;
  }
  @media (max-width: 426px) {
    padding: 0.5rem 1rem;
    font-size: 0.7rem;
  }
`;
