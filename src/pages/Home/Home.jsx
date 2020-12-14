/* component */
import MSlider from "../../component/MSlider";
import AboutSec from "../../component/AboutSec";
import DiscoverTit from "../../component/DiscoverTit";
import Discover from "../../component/Discover";
import DiscoverMenu from "../../component/DiscoverMenu";
import EventSlider from "../../component/EventSlider";
import ReservationSec from "../../component/ReservationSec";
import ReviewSlider from "../../component/ReviewSlider";
import OurVideo from "../../component/OurVideo";
import BlogSec from "../../component/BlogSec";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";

/* libraries */
import { Container, Row, Col } from "react-bootstrap";

/* images */
import HalfImg from "../../pato images/booking-01.jpg";

import "./Home.css";

export default function Home(props) {
  return (
    <div>
      <MSlider />
      <AboutSec />
      <DiscoverTit />
      <Discover />
      <DiscoverMenu />
      <EventSlider />
      <ReservationSec hgzimgclass="HalfImg " hgzImg={HalfImg} />
      <ReviewSlider />
      <OurVideo />
      <BlogSec />
      <SubEmail />
      <Footer />
    </div>
  );
}
