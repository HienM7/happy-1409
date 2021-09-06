import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import "./styles.css";
import Container from "../../common/Container";
import TVEffect from "../ImageHoverEffect/TVEffect";

const MemoryItem = () => {
  return (
    <div className="memory-item-container">
      <Container>
        <Row justify="space-between" align="middle">
          <Col
            lg={{ span: 16, order: 1 }}
            sm={{ span: 12, order: 1 }}
            xs={{ span: 24, order: 2 }}
          >
            <h1>
              <Fade direction="up" duration={1200} triggerOnce={true}>
                <div>
                  <span>And then</span>
                  <br />
                  <div className="memory-item-title">Keep more memories</div>
                </div>
              </Fade>
            </h1>
            <div className="quote">
              I want to share with you a quote that really impressed me the
              first time I heard it, "Youth is like heavy rain. Even though you
              catch a cold, you are still forward to experiencing it once again"
              Youth has so many joys and sadness, they are all just moments so
              there is no way to bring them back. After all, what makes us
              remember them is the memory. <br />
              Cherish the memories of the time we spent together
            </div>
          </Col>
          <Col
            lg={{ span: 8, order: 2 }}
            sm={{ span: 12, order: 2 }}
            xs={{ span: 24, order: 1 }}
          >
            <TVEffect
              title="@mhuongne"
              image="https://res.cloudinary.com/helios-m7/image/upload/v1630926778/mhuong/f25310d44ecbb895e1da22_k5ptdn.jpg"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MemoryItem;
