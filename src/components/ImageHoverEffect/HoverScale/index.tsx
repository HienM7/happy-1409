import "../style.css";
interface HoverScaleProps {
  image: string;
  title: string;
  titleIcon: string;
  imageStyle?: any;
  containerStyle?: any;
}

const HoverScale = ({
  image,
  title,
  titleIcon,
  imageStyle,
  containerStyle,
}: HoverScaleProps) => {
  return (
    <div className="hover-effect-grid" style={containerStyle}>
      <figure className="hover-scale">
        <img src={image} alt="img21" />
        <figcaption>
          <h4>
            {title + " "}
            <span>
              <img
                alt="scale"
                src={titleIcon}
                style={{
                  width: 20,
                  height: 20,
                  minHeight: 0,
                  display: "inline",
                  ...imageStyle,
                }}
              />
            </span>
          </h4>
        </figcaption>
      </figure>
    </div>
  );
};

export default HoverScale;
