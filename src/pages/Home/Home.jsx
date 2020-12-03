import { useHistory } from "react-router-dom";
/* component */
import MSlider from "../../component/MSlider";
import AboutSec from "../../component/AboutSec";
import Discover from "../../component/Discover";
/* libraries */

/* images */
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

export default function Home(props) {
  const {} = props;
  const history = useHistory();

  return (
    <div>
      <MSlider />
      <AboutSec />
      <Discover />
    </div>
  );
}
