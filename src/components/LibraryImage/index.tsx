import Slider from "react-slick";
import "./styles.css";
import HoverRainbow from "../ImageHoverEffect/HoverRainbow";

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  // slidesToShow: 4,
  // slidesToScroll: 4,
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
    <Slider {...settings}>
      <HoverRainbow image="https://scontent.fdad3-2.fna.fbcdn.net/v/t1.15752-9/172206441_145372260859745_5771222901979774173_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=ae9488&_nc_ohc=1zWeyy92x7oAX-aHVkh&_nc_oc=AQn-hzM5D0MMuQLFo1fDcRTFxoZrS-Qq12P5ke4BYiIC94Z3_FEzwNlRYTIhkV2GSt-NpNo_eeAjJSlKUNAAw7pp&_nc_ht=scontent.fdad3-2.fna&oh=3647d457807532d7291e4ecf43ac175c&oe=61564F7F" />
      <HoverRainbow
        position={true}
        image="https://scontent-sin6-3.xx.fbcdn.net/v/t1.15752-9/240136040_649106822732634_4113800451286040945_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Dw6iwmj5UAUAX_GkZ9x&_nc_ht=scontent-sin6-3.xx&oh=7a2953861a965c4ab57e37d4829deade&oe=615859A5"
      />
      <HoverRainbow image="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/240424701_1055498718593803_2258780380993041468_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=ItXkxucWzycAX9od2Am&_nc_ht=scontent.fdad3-3.fna&oh=31b0deae1b45f61b6a52f063409ab2a6&oe=61561688" />
      <HoverRainbow
        position={true}
        image="https://scontent.fdad3-1.fna.fbcdn.net/v/t1.15752-9/240603958_872337173707242_9167099196012190910_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=ae9488&_nc_ohc=IlHUz0c4cjUAX-RLEmN&_nc_ht=scontent.fdad3-1.fna&oh=c0f758d4179942f3f5e21cd9b6ce999f&oe=61579FC1"
      />
      <HoverRainbow image="https://scontent-sin6-3.xx.fbcdn.net/v/t1.15752-9/240253776_911480912801057_851497277395440113_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=ae9488&_nc_ohc=Fc1q60VaVo8AX808cqL&tn=KWxSSOkmfOq_shp1&_nc_ht=scontent-sin6-3.xx&oh=55ab60f5e00a38de2de0463347f18b32&oe=615639B2" />
      <HoverRainbow
        position={true}
        image="https://scontent.fdad3-3.fna.fbcdn.net/v/t1.15752-9/240662148_534564724291512_9095850778297382898_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=ae9488&_nc_ohc=4wrKzNmpypkAX-98iDq&_nc_ht=scontent.fdad3-3.fna&oh=24f3f9e3d747ac900465897225fad5f2&oe=615691B4"
      />
    </Slider>
  );
};

export default LibraryImage;
