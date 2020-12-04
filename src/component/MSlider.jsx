/* component */
import Navbar from "../component/Navbar";

/* libraries */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
/* images */
import M_Slide1 from "../pato images/main-slider/slide1.jpg";
import M_Slide2 from "../pato images/main-slider/slide2.jpg";
import M_Slide3 from "../pato images/main-slider/slide3.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

export default function MSlider(props) {
  const {} = props;
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 81000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div>
      <div className="M_slider" id="M_slider">
        <Slider {...settings}>
          <div className="sliderItem1">
            <img
              className="M_Slide1 img-M_Slide"
              alt="M_Slide1"
              src={M_Slide1}
            />
            <div className="M_content">
              <Navbar />
              <span className="caption2">Welcome to</span>
              <h2 className="caption1">Pato Place</h2>
              <button className="M_SlideBtn">Look Menu</button>
            </div>
          </div>
          <div className="sliderItem2">
            <img
              className="M_Slide2 img-M_Slide"
              src={M_Slide2}
              alt="M_Slide2"
            />
            <div className="M_content">
              <Navbar />
              <span className="caption2">Welcome to</span>
              <h2 className="caption1">Pato Place</h2>
              <button className="M_SlideBtn">Look Menu</button>
            </div>{" "}
          </div>
          <div className="sliderItem3" id="sliderItem3">
            <img
              className="M_Slide3 img-M_Slide"
              src={M_Slide3}
              alt="M_Slide3"
            />
            <div className="M_content">
              <Navbar />
              <span className="caption2">Welcome to</span>
              <h2 className="caption1">Pato Place</h2>
              <button className="M_SlideBtn">Look Menu</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
