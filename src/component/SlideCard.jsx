import { useEffect } from "react";

/* libraries */
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import WOW from "wow.js";
export default function SlideCard(props) {
  useEffect(() => {
    new WOW().init();
  }, []);
  const { src } = props;
  return (
    <Container fluid className="SlideCard wow fadeInDown mr-l">
      <Row>
        <Col lg={6} className="p-0">
          <div className="eventDivImg">
            <img className="eventImg" src={src} alt="OurSlide" />
            <span className="eventspan">
              08:00 PM Tuesday - 21 November 2018
            </span>
          </div>
        </Col>
        <Col lg={6} className="p-0">
          <div className="eventDivInfo">
            <h4 className="eventTit">Wines during specific nights</h4>
            <p className="card-p ">
              Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est.
              Sed fringilla, nunc sed imperdiet lacinia
            </p>
            <Link to="/Contact" className="Go-about link-card">
              View Details &nbsp;
              <span>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </span>
            </Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
