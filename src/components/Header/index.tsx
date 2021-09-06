import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { Link } from "react-scroll";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import { Button } from "../../common/Button";

import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  CustomNavLinkSmall,
  Label,
  Outline,
  Span,
} from "./styles";
import "./styles.css";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <>
        <Link to="remember" smooth={true} spy={true} offset={-80}>
          <CustomNavLinkSmall>
            <Span>{"Remember"}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="memory" smooth={true} spy={true} offset={-80}>
          <CustomNavLinkSmall>
            <Span>{"Memory"}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="wishes" smooth={true} spy={true} offset={-80}>
          <CustomNavLinkSmall>
            <Span>{"Wishes"}</Span>
          </CustomNavLinkSmall>
        </Link>
        <Link to="library" smooth={true} spy={true} offset={-80}>
          <CustomNavLinkSmall style={{ width: "180px" }}>
            <Span>
              <Button>{"Library"}</Button>
            </Span>
          </CustomNavLinkSmall>
        </Link>
      </>
    );
  };

  const changeHeader = () => {
    if (window.scrollY > 0) {
      return setNavbar(true);
    }

    if (navbar) {
      return setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeHeader);

  return (
    <HeaderSection className={navbar ? "header" : "header active"}>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            <SvgIcon src="cat.png" width="55px" height="57px" />
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default Header;
