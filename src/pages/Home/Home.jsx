import { useHistory } from "react-router-dom";
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

/* libraries */
import { Container, Row, Col } from "react-bootstrap";

/* images */

import "./style.css";

export default function Home(props) {
  const {} = props;
  const history = useHistory();

  return (
    <div>
      <MSlider />
      <AboutSec />
      <DiscoverTit />
      <Discover />
      <DiscoverMenu />
      <EventSlider />
      <ReservationSec />
      <ReviewSlider />
      <OurVideo />
      <BlogSec />
      <SubEmail />
    </div>
  );
}
