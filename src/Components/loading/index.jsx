import React from "react";
import "./Loading.css";
import logo from "../../Assets/IMAGES/logoHorizontal.svg";

const Loading = () => {
  return (
    <div id="loadingAnim">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default Loading;
