/* component */
import Title from "./Title";
import ReviewCard from "./ReviewCard";
/* libraries */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

/* images */
import ReviewSlide1 from "../pato images/avatar/avatar-01.jpg";
import ReviewSlide2 from "../pato images/avatar/avatar-04.jpg";
import ReviewSlide3 from "../pato images/avatar/avatar-05.jpg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className="" style={{ ...style }} onClick={onClick}>
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
    <div className="" style={{ ...style }} onClick={onClick}>
      <button className="MySlick-prev">
        <i>
          <FontAwesomeIcon icon={faAngleLeft} />
        </i>
      </button>
    </div>
  );
}

export default function ReviewSlider(props) {
  const { className } = props;
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
  // sliderItem1 sliderItem
  // sliderItem2 sliderItem
  // sliderItem3 sliderItem
  return (
    <div>
      <div className="ReviewSlide mt-5 pt-5" id="ReviewSlide">
        <Slider {...settings}>
          <div className="">
            <Title
              secTit="Customers Say"
              firstTit="REVIEW"
              className="black-tit"
            />
            <ReviewCard src={ReviewSlide1} />
          </div>
          <div className="">
            <Title
              secTit="Customers Say"
              firstTit="REVIEW"
              className="black-tit"
            />
            <ReviewCard src={ReviewSlide2} />
          </div>
          <div className="">
            <Title
              secTit="Customers Say"
              firstTit="REVIEW"
              className="black-tit"
            />
            <ReviewCard src={ReviewSlide3} />
          </div>
        </Slider>
      </div>
    </div>
  );
}
