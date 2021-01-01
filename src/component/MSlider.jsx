import { useEffect } from "react";
/* component */
import Navbar from "../component/Navbar";
import Navside from "./Navside";

/* libraries */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <button className="MySlick-next">
        <i>
          <FontAwesomeIcon icon={faAngleRight} />
        </i>
      </button>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <button className="MySlick-prev">
        <i>
          <FontAwesomeIcon icon={faAngleLeft} />
        </i>
      </button>
    </div>
  );
}

export default function OurSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 81000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="MySlick-next" />,
    prevArrow: <SamplePrevArrow className="MySlick-prev" />,
  };

  return (
    <div>
      <div className="M_slider" id="M_slider">
        <Navside />
        <Navbar />
        <Slider {...settings}>
          <div className="M_slide M_slide1">
            <div className="M_content ">
              <span className="caption2 wow zoomInDown">Welcome to</span>
              <h2 className="caption1 wow rotateInUpLeft" data-wow-delay="0.8s">
                Pato Place
              </h2>
              <button className="M_SlideBtn">Look Menu</button>
            </div>
          </div>
          <div className="M_slide M_slide2">
            <div className="M_content">
              <span className="caption2 wow zoomInDown">Welcome to</span>
              <h2 className="caption1 wow rotateInUpLeft" data-wow-delay="0.8s">
                Pato Place
              </h2>
              <button className="M_SlideBtn">Look Menu</button>
            </div>
          </div>
          <div className="M_slide M_slide3">
            <div className="M_content">
              <span className="caption2 wow zoomInDown">Welcome to</span>
              <h2 className="caption1 wow rotateInUpLeft" data-wow-delay="0.8s">
                Pato Place
              </h2>
              <button className="M_SlideBtn">Look Menu</button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
