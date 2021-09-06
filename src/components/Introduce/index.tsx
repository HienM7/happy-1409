import { Row, Col } from "antd";
import { Fade } from "react-awesome-reveal";
import Slider from "react-slick";
import "./style.css";
import HoverScale from "../ImageHoverEffect/HoverScale";
import Container from "../../common/Container";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: false,
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  initialSlide: 0,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

const Introduce = () => {
  return (
    <div className="introduce-container" id="wishes">
      {/* <div className="sub-container"> */}
      <Container>
        <Row justify="space-between" align="middle">
          <Col lg={9} md={9} sm={12} xs={24}>
            <Fade
              cascade
              direction="up"
              damping={0.2}
              className="introduce-content"
              triggerOnce={true}
            >
              <h3>
                Happy birthday mhuongne
                <span>
                  <img
                    alt="happy"
                    src="/img/svg/cake.svg"
                    style={{ width: 36, marginLeft: 10 }}
                  />
                </span>
              </h3>
              <div>May this day be as sunny as your smile</div>
              <div>and as beautiful as you are.</div>
              <div>You shine every day,</div>
              <div> but on this day you will shine the brightest.</div>
              <div style={{ paddingBottom: "50px" }}>
                A gift from MH{" "}
                <span>
                  <img
                    src="/img/svg/heart.svg"
                    style={{ width: 15 }}
                    alt="gift"
                  />{" "}
                </span>
              </div>
            </Fade>
          </Col>
          <Col lg={14} md={14} sm={11} xs={24}>
            <Slider {...settings}>
              <HoverScale
                imageStyle={{
                  position: "relative",
                  bottom: 0.2,
                  width: 20,
                  height: 18,
                }}
                title="Happy"
                titleIcon="/img/svg/happy.svg"
                image="https://res.cloudinary.com/helios-m7/image/upload/v1630948450/mhuong/d905de94818b77d52e9a36_mqbqlh.jpg"
              />
              <HoverScale
                imageStyle={{ position: "relative", bottom: 4 }}
                title="Birthday !!!"
                titleIcon="/img/svg/birthday.svg"
                image="https://res.cloudinary.com/helios-m7/image/upload/v1630928065/mhuong/mhx_ej0ka7.jpg"
              />
              <HoverScale
                imageStyle={{ position: "relative", bottom: 4.5 }}
                title="Best"
                titleIcon="/img/svg/best.svg"
                image="https://res.cloudinary.com/helios-m7/image/upload/v1630926782/mhuong/c63b934dcb523d0c64434_ihb6ux.jpg"
              />
              <HoverScale
                imageStyle={{ position: "relative", bottom: 1.25 }}
                title="Wishes"
                titleIcon="/img/svg/wishes.svg"
                image="https://res.cloudinary.com/helios-m7/image/upload/v1630926782/mhuong/d4a913384c27ba79e33629_t4avbo.jpg"
              />
              <HoverScale
                title="For"
                imageStyle={{
                  position: "relative",
                  bottom: 1.3,
                  width: 21,
                  height: 21,
                }}
                titleIcon="/img/svg/for.svg"
                image="https://res.cloudinary.com/helios-m7/image/upload/v1630926778/mhuong/e91d2aef38f1ceaf97e0_vszkoy.jpg"
              />
              <HoverScale
                title="You"
                titleIcon="/img/svg/you.svg"
                image="https://res.cloudinary.com/helios-m7/image/upload/v1630926780/mhuong/6cdb03ac5bb3adedf4a25_c386wj.jpg"
              />
            </Slider>
            {/* </div> */}
          </Col>
        </Row>
      </Container>
      {/* </div> */}
    </div>
  );
};

export default Introduce;
