import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faHeart,
  faShare,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

import "../styles.css";
interface HoverScaleProps {
  image?: string;
  title?: string;
  titleIcon?: string;
  imageStyle?: any;
  containerStyle?: any;
}

const TVEffect = ({
  image,
  title,
  titleIcon,
  imageStyle,
  containerStyle,
}: HoverScaleProps) => {
  return (
    <div className="tv-grid" style={containerStyle}>
      <figure className="effect-terry">
        <img src={image} alt="img16" />
        <figcaption>
          <h2>{title}</h2>
          <p>
            <div className="icon">
              <FontAwesomeIcon icon={faDownload} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHeart} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faShare} />
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faTags} />
            </div>
          </p>
        </figcaption>
      </figure>
    </div>
  );
};

export default TVEffect;
