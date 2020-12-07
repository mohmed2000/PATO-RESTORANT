/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import Instagram from "../pato images/gallery/Instagram";

import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <div className="footer">
        <Container fluid="lg">
          <Row>
            <Col md={4}>
              <div className="Divfirst">
                <h4 className="footerTit">CONTACT US</h4>
                <div className="footerDivP mb-2">
                  <i className="footerIcon ">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                  </i>
                  <span className="footerP ml-1">
                    8th floor, 379 Hson St, New York, NY 10018
                  </span>
                </div>
                <div className="footerDivP mb-2">
                  <i className="footerIcon ">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                  </i>
                  <span className="footerP">(+1) 96 716 6879 </span>
                </div>
                <div className="footerDivP mb-2">
                  <i className="footerIcon ">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </i>
                  <span className="footerP">contact@pato.com</span>
                </div>
              </div>
              <div className="Divfirst2">
                <h4 className="footerTit ">OPENING TIMES</h4>
                <div className="footerDivP">09:30 AM – 11:00 PM</div>
                <div className="footerDivP">Every Day</div>
              </div>
            </Col>
            <Col md={4}>
              <h4 className="footerTit ">LATEST TWITTER</h4>
              <div className="footerDivP mb-2">
                <i className="footerIcon ">
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
                <span className="footerP text-danger">@patoRestaurant</span>
                <div className="footerDivP ">
                  Activello is a good option. It has a slider built into that
                  displays the featured image in the slider.
                </div>
                <span className="footerP text-danger pl-0">
                  https://buff.ly/2zaSfAQ
                </span>
                <div className="footerDivP mt-3 mb-4">21 Dec 2017</div>
              </div>

              <div className="footerDivP mb-2">
                <i className="footerIcon ">
                  <FontAwesomeIcon icon={faTwitter} />
                </i>
                <span className="footerP text-danger">@patoRestaurant</span>
                <div className="footerDivP ">
                  Activello is a good option. It has a slider built into that
                  displays the featured image in the slider.
                </div>
                <span className="footerP text-danger pl-0">
                  https://buff.ly/2zaSfAQ
                </span>
                <div className="footerDivP mt-3">21 Dec 2017</div>
              </div>
            </Col>
            <Col md={4}>
              <h4 className="footerTit ">INSTAGRAM</h4>
              <Instagram />
            </Col>
          </Row>
        </Container>
      </div>
      <div className="lastFotter">
        <Container fluid="lg">
          <Row>
            <Col md={12}>
              <div className="setIcon">
                <span className="icon  ml-3">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
                <span className="icon  ml-3">
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
                <span className="icon  ml-3">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </div>
              <div className="marka">
                <span className="text-white">
                  made with{" "}
                  <i className="love text-danger">
                    <FontAwesomeIcon icon={faHeart} />
                  </i>{" "}
                  by mohamed awad
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
