import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Introduce from "../../components/Introduce";
import LibraryImage from "../../components/LibraryImage";
import ScrollToTop from "../../common/ScrollToTop";
import LockBack from "../../components/LockBack";
import Memory from "../../components/Memory";
import MemoryItem from "../../components/MemoryItem";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <Introduce />
      <LockBack />
      <Memory />
      <MemoryItem />
      <LibraryImage />
    </div>
  );
};

export default Home;
