import styled from "styled-components";

export const StyledTableWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  background-color: #fff;
  margin: 0 auto;
  max-width: 1200px;
`;
export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: inherit;

  thead {
    background-color: #f3f5f6;

    th {
      font-weight: bold;
      text-align: center;
      padding: 20px;
      font-size: 1rem;

      @media (max-width: 1024px) {
        font-size: 0.9em;
        padding: 1vw 0.8vw;
      }
      @media (max-width: 768px) {
        padding: 10px;
        font-size: 0.8rem;
      }
      @media (max-width: 425px) {
        padding: 5px;
        font-size: 0.6rem;
      }
    }
  }

  tbody {
    background-color: inherit;
    tr {
      td {
        width: 15%;
        text-align: center;
        padding: 10px;
        vertical-align: top;
        font-size: 12px;

        &:first-child {
          width: 40%;
        }

        @media (max-width: 767px) {
          font-size: 14px;
          padding: 8px;
        }

        @media (max-width: 480px) {
          font-size: 12px;
          padding: 6px;
        }
      }
    }
  }
`;
export const StyledProduct = styled.div`
  display: flex;
  align-items: start;
  font-size: 16px;

  .image-container {
    margin-right: 10px;

    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 5px;
    }
  }

  .details {
    display: flex;
    flex-direction: column;
    text-align: left;

    .ant-card-meta-description {
      margin: 0;
      font-size: 15px;
      font-weight: bold;
      color: #333;

      @media (max-width: 1024px) {
        font-size: 12px;
      }
      @media (max-width: 768px) {
        font-size: 12px;
      }

      @media (max-width: 480px) {
        font-size: 14px;
        margin-bottom: 5px;
      }
    }

    h5 {
      margin: 0;
      font-size: 14px;
      color: #888;

      @media (max-width: 768px) {
        font-size: 13px;
      }

      @media (max-width: 480px) {
        font-size: 12px;
      }
    }
  }

  @media (max-width: 768px) {
    font-size: 14px;

    .image-container img {
      width: 80px;
      height: 80px;
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;

    .image-container {
      margin-bottom: 5px;
    }

    .details h3 {
      font-size: 14px;
    }

    .details h5 {
      font-size: 12px;
    }
  }
`;
export const RemoveButton = styled.button`
  background-color: #ff4d4f;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #d9363e;
  }

  @media (max-width: 768px) {
    padding: 4px 8px;
  }

  @media (max-width: 480px) {
    padding: 3px 6px;
  }
`;
export const StyledCartTotal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  padding: 20px;
`;
export const StyledCartTotalDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-bottom: 1px solid #555555b4;
  padding: 5px 0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
export const StyledTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const StyledButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledCartAssets = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }

  #leftCartAssets {
    width: 100%;
    height: auto;

    #couponCode {
      width: 70%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      border: 1.5px dotted #626974;
      border-radius: 6px;
      padding: 8px 8px;

      @media (max-width: 768px) {
        width: 100%;
      }

      p {
        color: #041e42;
        @media (max-width: 1024px) {
          font-size: 0.7rem;
        }
      }
      button {
        color: #041e42;
        border: none;
        border-bottom: 1px solid #333;
        cursor: pointer;
        background-color: inherit;

        @media (max-width: 1024px) {
          font-size: 0.7rem;
        }
      }
    }
  }
  #rightCartAssets {
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: end;
    gap: 1.5rem;

    @media (max-width: 768px) {
      justify-content: center;
    }

    #continue-shopping,
    #update-cart {
      width: 30%;

      @media (max-width: 1024px) {
        width: 40%;
      }
    }
  }
`;
