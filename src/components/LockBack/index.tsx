import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import "./styles.css";
import Container from "../../common/Container";

const LockBack = () => {
  return (
    <div className="lock-back-container" id="remember">
      <Container>
        <Fade cascade direction="up" damping={0.2} triggerOnce={true}>
          <Row justify="space-between" align="middle">
            <Col lg={24} className="lock-back-title">
              <h5>Remember that</h5>
              <h2>Appreciate what you have today</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={8} sm={12} xs={24}>
              <div className="quote-container">
                <div className="thumbnail">
                  <img
                    src="https://res.cloudinary.com/helios-m7/image/upload/v1630926781/mhuong/avatar4_zowklf.jpg"
                    alt="img"
                  />
                </div>
                <div className="quote-content">
                  <h3>Your Family</h3>
                  <p>
                    Having somewhere to go is home. Having someone to love is
                    family. And having both is a blessing.
                  </p>
                </div>
              </div>
            </Col>
            <Col lg={8} sm={12} xs={24}>
              <div className="quote-container">
                <div className="thumbnail">
                  <img
                    src="https://res.cloudinary.com/helios-m7/image/upload/v1630926782/mhuong/avatar2_j0ptn5.jpg"
                    alt="img"
                  />
                </div>
                <div className="quote-content">
                  <h3>Your Friends</h3>
                  <p>
                    There is nothing better than a friend unless it is a friend
                    with chocolate.
                  </p>
                </div>
              </div>
            </Col>
            <Col
              lg={{ span: 8, offset: 0 }}
              sm={{ span: 12, offset: 6 }}
              xs={{ span: 24, offset: 0 }}
            >
              <div className="quote-container">
                <div className="thumbnail">
                  <img
                    src="https://res.cloudinary.com/helios-m7/image/upload/v1630926781/mhuong/avatar_roxsac.jpg"
                    alt="img"
                  />
                </div>
                <div className="quote-content">
                  <h3>Yourself</h3>
                  <p>
                    Be proud of who you are, and not ashamed of how someone else
                    sees you.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Fade>
      </Container>
    </div>
  );
};

export default LockBack;
