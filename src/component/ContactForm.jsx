/* libraries */
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
export default function ContactForm() {
  return (
    <div className="ContactForm">
      <h3 className="contactTit">Send us a Message</h3>
      <Container className="ContactRow" fluid>
        <Row className="ContactRow">
          <Col>
            <label className="form-label " htmlFor="Name">
              Name
            </label>
            <br />
            <input
              className="form-input form-input-text mt-0"
              type="text"
              name="Name"
              id="Name"
              placeholder="Name"
            />
          </Col>
          <Col>
            <label className="form-label " htmlFor="Email">
              Email
            </label>
            <br />
            <input
              className="form-input form-input-text mt-0"
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
            />
          </Col>
          <Col>
            <label className="form-label " htmlFor="Phone">
              Phone
            </label>
            <br />
            <input
              className="form-input form-input-text mt-0"
              type="text"
              name="Phone"
              id="Phone"
              placeholder="Phone"
            />
          </Col>
          <Col md={12}>
            <label className="form-label mt-4" htmlFor="Phone">
              Message
            </label>
            <textarea
              className="form-input mytextarea form-input-text mt-0"
              name="Message"
              placeholder="Message "
              id="Message"
            ></textarea>
          </Col>
          <Col md={12}>
            <button className="contactBtn">submit</button>
          </Col>
        </Row>
      </Container>
      <Container fluid="lg">
        <Row className="ContactRow2">
          <Col>
            <div className="locationDiv">
              <div className="locationIcon">
                <FontAwesomeIcon className="" icon={faMapMarkerAlt} />
              </div>
              <div className="locationContent">
                <h3 className="ContactTit">LOCATION</h3>
                <p className="locationP">
                  8th floor, 379 Hudson St, New York, NY 10018
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="locationDiv">
              <div className="locationIcon">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className="locationContent">
                <h3 className="ContactTit">CALL US</h3>
                <p className="locationP">(+1) 96 716 6879</p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="locationDiv">
              <div className="locationIcon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="locationContent">
                <h3 className="ContactTit">OPENING HOURS</h3>
                <p className="locationP">09:30 AM – 11:00 PM Every Day</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
