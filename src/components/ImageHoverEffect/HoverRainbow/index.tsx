import "../style.css";
interface HoverScaleProps {
  image: string;
  title?: string;
  titleIcon?: string;
  imageStyle?: any;
  containerStyle?: any;
  position?: boolean;
}

const HoverRainbow = ({
  image,
  title,
  titleIcon,
  imageStyle,
  containerStyle,
  position,
}: HoverScaleProps) => {
  return (
    <div
      className={
        position ? "hover-effect-grid-2 active-position" : "hover-effect-grid-2"
      }
    >
      <div className="hover-rainbow">
        <img src={image} alt="img25" />
        {/* <h4>Test</h4> */}
      </div>
    </div>
  );
};

export default HoverRainbow;
