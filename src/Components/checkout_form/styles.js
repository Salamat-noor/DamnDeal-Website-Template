import styled from "styled-components";
import { Row } from "antd";

// Styled Components
export const LoginInfo = styled.div`
  margin: 1rem 0 2rem 0;
`;
export const StyledMotherRow = styled(Row)`
  .text-center {
    text-align: center;
  }
`;
export const CheckoutFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border-radius: 5px;
  margin-bottom: 20px;
`;
export const StyledField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`;
export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 15px;
  display: flex;
  gap: ${(props) => (props.type === "checkbox" ? `5px` : null)};
  align-items: ${(props) =>
    props.type === "checkbox"
      ? `center`
      : props.type === "checkboxplaceorder"
      ? `start`
      : ""};
  flex-direction: ${(props) =>
    props.type === "checkbox"
      ? `row`
      : props.type === "checkboxplaceorder"
      ? `row`
      : `column`};
`;
export const Label = styled.label`
  font-weight: bold;
  margin-bottom: 5px;
`;
export const Input = styled.input`
  padding: ${(props) => (props.type === "checkbox" ? null : `10px`)};
  border: 1px solid #ccc;
  border-radius: 3px;
  width: ${(props) =>
    props.type === "checkbox"
      ? `auto`
      : `100%`}; /* Make all inputs fill the available space */
  margin-bottom: ${(props) =>
    props.type === "checkbox"
      ? `5px`
      : `10px`}; /* Add some space between inputs */
`;
export const Select = styled.select`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  width: 100%; /* Make select fill the available space */
  margin-bottom: 10px; /* Add some space between inputs */
`;
export const Button = styled.button`
  padding: 10px 20px;
  background: #f5c34b;
  border: 1px solid #f5c34b;
  box-shadow: 0px 5px 20px 0px #f5c34b26;
  color: #000;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #0069d9;
    color: white;
  }
`;
export const StyledShippingDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 10px 0;
`;
export const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 5px;
  margin: 5px 0;
`;
export const StyledProductContainer = styled.div`
  #YourOrder {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
export const StyledProductDetails = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;

  h4 {
    width: 100%;
  }
  p {
    width: 100%;
    text-align: end;
  }
`;
