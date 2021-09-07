import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import "./styles.css";
import Container from "../../common/Container";
import TVEffect from "../ImageHoverEffect/TVEffect";

const Memory = () => {
  return (
    <div className="memory-container" id="memory">
      <Container>
        <Row justify="space-between" align="middle">
          <Col lg={16} sm={16} xs={24}>
            <Fade
              delay={250}
              cascade
              direction="left"
              damping={0.2}
              triggerOnce={true}
            >
              <TVEffect
                title="@maihuongne"
                image="https://res.cloudinary.com/helios-m7/image/upload/v1631024231/maihuong/0dba9588ca973cc9658614_gd1p8v.jpg"
              />
            </Fade>
          </Col>
          <Col lg={7} sm={7} xs={24}>
            <Fade cascade direction="right" damping={0.2} triggerOnce={true}>
              <h2>Let's look back on the memories</h2>
              <div className="quote">What I like about photographs is that</div>
              <div className="quote">
                they capture a moment that’s gone forever,
              </div>
              <div className="quote">impossible to reproduce</div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Memory;
