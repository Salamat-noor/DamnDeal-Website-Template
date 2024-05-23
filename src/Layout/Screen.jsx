import { React, useState } from "react";
import logo from "../Assets/IMAGES/logoHorizontal.svg";
import Header from "../Components/header/index";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Drawer, Button } from "antd";
import { Grid } from "antd";
const { useBreakpoint } = Grid;

const Screen = () => {
  const screens = useBreakpoint();

  //? State to control drawer visibility
  const [visible, setVisible] = useState(false);

  //? Function to toggle drawer visibility
  const toggleDrawer = () => {
    setVisible(!visible);
  };

  return (
    <>
      {!screens.lg ? (
        <div>
          <StyledNav>
            <Link to={"/"} className="homepageLink">
              <img src={logo} alt="" />
            </Link>
            <Button onClick={toggleDrawer}>MENU</Button>
          </StyledNav>

          <Drawer
            title="MENU"
            placement="right"
            closable={true}
            onClose={toggleDrawer}
            open={visible}
            width={400}
          >
            <Header
              fd={"column"}
              headerAlign={"column-reverse"}
              ta={"center"}
            />
          </Drawer>
        </div>
      ) : (
        <Header />
      )}
    </>
  );
};

export default Screen;

const StyledNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 9px !important;
`;
