import { useHistory } from "react-router-dom";
/* component */
import MSlider from "../../component/MSlider";
import AboutSec from "../../component/AboutSec";
import Discover from "../../component/Discover";
import DiscoverMenu from "../../component/DiscoverMenu";
 event-sec_fix-reservation-sec
import OurSlider from "../../component/OurSlider";
=======
 main
import ReservationSec from "../../component/ReservationSec";
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
      <Discover />
      <DiscoverMenu />
 event-sec_fix-reservation-sec
      <OurSlider />
=======
 main
      <ReservationSec />
    </div>
  );
}
