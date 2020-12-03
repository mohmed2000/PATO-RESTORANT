import { useHistory } from "react-router-dom";
/* component */
import MSlider from "../../component/MSlider";
import AboutSec from "../../component/AboutSec";

/* libraries */

/* images */
import { Container, Row, Col } from "react-bootstrap";

import "./style.css";

export default function Home(props) {
  const {} = props;
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <div>
      <MSlider />
      <AboutSec />
    </div>
  );
}
