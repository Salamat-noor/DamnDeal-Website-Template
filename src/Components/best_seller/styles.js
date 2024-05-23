import styled from "styled-components";

export const StyledCard = styled.div`
  margin: 6rem 0px !important;

  .card-heading {
    padding: 10px 50px !important;
    text-align: left;
  }
  .SectionHeading {
    font-size: 19px;
  }
  .CardsCol {
    display: flex !important;
    justify-content: center;
    margin: 25px 0px !important;
    text-align: center;
    padding: 0 9px !important;
  }
  .CardsCol:hover .card-heading {
    text-align: center;
  }
  @media (max-width: 426px) {
    .card-heading {
      padding: 10px !important;
      text-align: center;
    }
  }
`;
