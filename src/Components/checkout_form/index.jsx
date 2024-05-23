import React, { useState } from "react";
import { Col } from "antd";
import ProductDetailsAsset from "./ProductDetailsAsset";
import * as Custom from "./styles";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    streetAddress: "",
    streetAddress2: "",
    city: "",
    state: "",
    zipCode: "",
    phone: "",
    email: "",
    shipnotes: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here (e.g., send data to server)
    console.log("Form submitted:", formData);
  };

  return (
    <Custom.StyledMotherRow justify={"center"} gutter={[20, 20]}>
      <Col xs={24}>
        <h2 className="text-center">Checkout</h2>
      </Col>

      <Col xs={24} md={15}>
        <Custom.CheckoutFormContainer onSubmit={handleSubmit}>
          <Custom.LoginInfo>
            <h4>Returning customer? Click here to login</h4>
          </Custom.LoginInfo>

          <Custom.StyledField>
            <Custom.FormGroup>
              <Custom.Label htmlFor="firstName">First Name *</Custom.Label>
              <Custom.Input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Ali"
                required
              />
            </Custom.FormGroup>
            <Custom.FormGroup>
              <Custom.Label htmlFor="lastName">Last Name *</Custom.Label>
              <Custom.Input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Custom.FormGroup>
          </Custom.StyledField>
          <Custom.FormGroup>
            <Custom.Label htmlFor="companyName">Company Name</Custom.Label>
            <Custom.Input
              type="text"
              id="companyName"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </Custom.FormGroup>
          {/* Country Or region */}
          <Custom.FormGroup>
            <Custom.Label htmlFor="country">Country / Region *</Custom.Label>
            <Custom.Select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            >
              {/* Add your country options here */}
              <option value="">Select Country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              {/* ... */}
            </Custom.Select>
          </Custom.FormGroup>
          {/* Street Address */}
          <Custom.FormGroup>
            <Custom.Label htmlFor="streetAddress">
              Street Address *
            </Custom.Label>
            <Custom.Input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              required
            />
          </Custom.FormGroup>
          <Custom.FormGroup>
            <Custom.Input
              type="text"
              id="streetAddress2"
              name="streetAddress2"
              value={formData.streetAddress2}
              onChange={handleChange}
            />
          </Custom.FormGroup>
          {/*Town Or City */}
          <Custom.FormGroup>
            <Custom.Label htmlFor="city">Town / City *</Custom.Label>
            <Custom.Input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </Custom.FormGroup>
          {/* State */}
          <Custom.FormGroup>
            <Custom.Label htmlFor="state">State *</Custom.Label>
            <Custom.Select
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              {/* Add your country options here */}
              <option value="">State</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              {/* ... */}
            </Custom.Select>
          </Custom.FormGroup>
          {/* Zip Code  */}
          <Custom.FormGroup>
            <Custom.Label htmlFor="zipCode">Zip Code *</Custom.Label>
            <Custom.Input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </Custom.FormGroup>
          {/* Phone and Email Address */}
          <Custom.StyledField>
            <Custom.FormGroup>
              <Custom.Label htmlFor="phone">Phone *</Custom.Label>
              <Custom.Input
                type="tel" // Set input type to "tel" for phone number formatting (optional)
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+90"
                required
              />
            </Custom.FormGroup>
            <Custom.FormGroup>
              <Custom.Label htmlFor="email">Email Address *</Custom.Label>
              <Custom.Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Custom.FormGroup>
          </Custom.StyledField>
          {/* Create Account */}
          <Custom.FormGroup type={"checkbox"}>
            <Custom.Input
              type="checkbox"
              id="createaccount"
              name="createaccount"
              onChange={handleChange}
            />
            <Custom.Label htmlFor="createaccount">
              Create an account?
            </Custom.Label>
          </Custom.FormGroup>
          {/* Shipping Details */}
          <Custom.StyledShippingDetails>
            <h3>Shipping Details</h3>
            <Custom.FormGroup type={"checkbox"}>
              <Custom.Input
                type="checkbox"
                id="shiptodfaddress"
                name="shiptodfaddress"
                onChange={handleChange}
              />
              <Custom.Label htmlFor="shiptodfaddress">
                Ship to a different address?
              </Custom.Label>
            </Custom.FormGroup>
            <Custom.FormGroup>
              <p>Order notes (optional)</p>
              <Custom.StyledTextArea
                name="shipnotes"
                id="shipnotes"
                placeholder="Order Notes"
                value={formData.shipnotes}
                onChange={handleChange}
              ></Custom.StyledTextArea>
            </Custom.FormGroup>
          </Custom.StyledShippingDetails>
        </Custom.CheckoutFormContainer>
      </Col>

      <Col xs={24} md={9}>
        <Custom.StyledProductContainer>
          <div id="YourOrder">
            <ProductDetailsAsset
              maintitle={"Your Order"}
              title={"Apple MacBook Pro with Apple M1 Chip x 2"}
              price={"$229.99"}
            />
            <ProductDetailsAsset
              title={"Apple MacBook Pro with Apple M1 Chip x 2"}
              price={"$229.99"}
            />
          </div>
          <div id="paymentInformation"></div>
          {/* Place Order */}
          <Custom.FormGroup type={"checkboxplaceorder"}>
            <Custom.Input
              type="checkbox"
              id="placeorder"
              name="placeorder"
              onChange={handleChange}
            />
            <Custom.Label htmlFor="placeorder">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our privacy policy.
            </Custom.Label>
          </Custom.FormGroup>
          <Custom.Button type="submit">Place Order</Custom.Button>
        </Custom.StyledProductContainer>
      </Col>
    </Custom.StyledMotherRow>
  );
};

export default CheckoutForm;
