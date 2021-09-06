import Slider from "react-slick";
import "./styles.css";
import HoverRainbow from "../ImageHoverEffect/HoverRainbow";
import { Fade } from "react-awesome-reveal";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  // slidesToShow: 4,
  // slidesToScroll: 4,
  arrows: true,
  slidesToShow: 5,
  // autoplay: true,
  autoplaySpeed: 3000,
  slidesToScroll: 1,
  initialSlide: 0,
  adaptiveHeight: false,
  responsive: [
    {
      breakpoint: 1180,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

function SampleNextArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <img
        src="/img/svg/right-arrow.svg"
        className="next-arrow arrow"
        alt="arrow"
      />
    </div>
  );
}

function SamplePrevArrow(props: any) {
  const { onClick } = props;
  return (
    <div onClick={onClick}>
      <img
        src="/img/svg/left-arrow.svg"
        className="pre-arrow arrow"
        alt="arrow"
      />
    </div>
  );
}

const LibraryImage = () => {
  return (
    <div className="img-library" id="library">
      <Fade direction="up" duration={1200} triggerOnce={true}>
        <h1 className="wish">
          One again, happy birthday <img src="/img/svg/smile.svg" alt="smile" />
        </h1>
      </Fade>
      <Slider {...settings}>
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1630941378/mhuong/66c7cf39541da243fb0c_1_ihe4su.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1630926781/mhuong/642a8cb8d3a725f97cb637_vu0hiw.jpg"
        />
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1630926780/mhuong/6cdb03ac5bb3adedf4a25_c386wj.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1630940254/mhuong/27a7bac21ae6ecb8b5f7_ufhtsz.jpg"
        />
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1630941508/mhuong/8d1c0350e474122a4b65_1_jisvmt.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1630940255/mhuong/60fb10d3edf71ba942e6_fwr7bt.jpg"
        />
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1630941873/mhuong/fde9dc121836ee68b727_datts0.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1630940253/mhuong/b475a2be059af3c4aa8b_vkdssw.jpg"
        />
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1630926779/mhuong/e07c6dee32f1c4af9de035_b6lnfc.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1630926780/mhuong/9a3abd3ee221147f4d3018_thzfig.jpg"
        />
      </Slider>
    </div>
  );
};

export default LibraryImage;
