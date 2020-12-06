/* component */
import Title from "./Title";
import SlideCard from "./SlideCard";
/* libraries */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
/* images */
import OurSlide1 from "../pato images/event/event-01.jpg";
import OurSlide2 from "../pato images/event/event-02.jpg";
import OurSlide3 from "../pato images/event/event-06.jpg";

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
    nextArrow: <SampleNextArrow className="MySlick-next" />,
    prevArrow: <SamplePrevArrow className="MySlick-prev" />,
    appendDots: (dots) => (
      <div className="ul-slick">
        <ul> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <input className="MySlick-dots" type="button" value="" />
    ),
  };

  return (
    <div>
      <div className="OurSlide" id="OurSlide">
        <Slider {...settings}>
          <div className="sliderItem1 sliderItem">
            <Title
              secTit="Upcomming"
              firstTit="Events"
              className="black-tit text-white"
            />
            <SlideCard src={OurSlide2} />
          </div>
          <div className="sliderItem2 sliderItem">
            <Title
              secTit="Upcomming"
              firstTit="Events"
              className="black-tit text-white"
            />
            <SlideCard src={OurSlide3} />
          </div>
          <div className="sliderItem3 sliderItem">
            <Title
              secTit="Upcomming"
              firstTit="Events"
              className="black-tit text-white"
            />
            <SlideCard src={OurSlide1} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
