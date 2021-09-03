import IntroContent from "../../content/IntroContent.json";
import AboutContent from "../../content/AboutContent.json";
import MissionContent from "../../content/MissionContent.json";
import ProductContent from "../../content/ProductContent.json";
import ContactContent from "../../content/ContactContent.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Introduce from "../../components/Introduce";
import LibraryImage from "../../components/LibraryImage";
import ScrollToTop from "../../common/ScrollToTop";
import ContentBlock from "../../components/ContentBlock";
import Contact from "../../components/ContactForm";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Introduce />
      <ContentBlock
        type="right"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      />
      <ContentBlock
        type="left"
        title={AboutContent.title}
        content={AboutContent.text}
        section={AboutContent.section}
        icon="graphs.svg"
        id="about"
      />
      <ContentBlock
        type="right"
        title={MissionContent.title}
        content={MissionContent.text}
        icon="product-launch.svg"
        id="mission"
      />
      <ContentBlock
        type="left"
        title={ProductContent.title}
        content={ProductContent.text}
        icon="waving.svg"
        id="product"
      />
      <LibraryImage />
      <Contact
        title={ContactContent.title}
        content={ContactContent.text}
        id="contact"
      />
    </div>
  );
};

export default Home;
