import Slider from "react-slick";
import "./styles.css";
import HoverRainbow from "../ImageHoverEffect/HoverRainbow";
import { Fade } from "react-awesome-reveal";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  arrows: true,
  slidesToShow: 5,
  autoplay: true,
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
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1631023232/maihuong/66c7cf39541da243fb0c_xvdmo0.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1631023236/maihuong/642a8cb8d3a725f97cb637_jhman0.jpg"
        />
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1631023222/maihuong/6cdb03ac5bb3adedf4a25_jzmg3v.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1631023234/maihuong/27a7bac21ae6ecb8b5f7_tgl0sz.jpg"
        />
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1631023224/maihuong/8d1c0350e474122a4b65_1_pytajv.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1631024289/maihuong/60fb10d3edf71ba942e6_uig9qs.jpg"
        />
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1631023216/maihuong/fde9dc121836ee68b727_xr14jc.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1631023277/maihuong/b475a2be059af3c4aa8b_ruyoul.jpg"
        />
        <HoverRainbow image="https://res.cloudinary.com/helios-m7/image/upload/v1631023211/maihuong/e07c6dee32f1c4af9de035_nrixyr.jpg" />
        <HoverRainbow
          position={true}
          image="https://res.cloudinary.com/helios-m7/image/upload/v1631024282/maihuong/9a3abd3ee221147f4d3018_ne9n4d.jpg"
        />
      </Slider>
    </div>
  );
};

export default LibraryImage;
