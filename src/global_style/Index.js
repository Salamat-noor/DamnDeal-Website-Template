import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Jost Medium";
}
html,
body {
  width: 100%;
  height: auto;
}
#root {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: start;
  justify-content: center;
  background-color: #f5f5f5;
}
.App {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: scroll;
  max-width: 1400px;
  background-color: #fff;
}
::-webkit-scrollbar {
  display: none;
}
.spinContainer {
  background-color: #000;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.homepageLink {
  color: #000;
}
.homepageLink.active {
  color: orange;
}

`;

export default GlobalStyle;
