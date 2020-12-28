/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import { Container, Row, Col } from "react-bootstrap";
export default function SubEmail() {
  return (
    <div className="SubEmail">
      <div className="Email">
        <Container className="Email" fluid="lg">
          <Row>
            <Col md={4}>
              <h4 className="emailTit my-3 ">SPECIAL SIGN UP</h4>
            </Col>
            <Col md={4}>
              <input
                className="emailInput form-input-text mt-1 mb-4"
                type="text"
                placeholder="Email Address"
                name="Phone"
                id="Phone"
              />
            </Col>
            <Col md={4}>
              <i className="EmailIcon">
                <FontAwesomeIcon icon={faEnvelope} />
              </i>
              <button type="submit" className="emailbtn ml-1 mt-1">
                SIGN-UP
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
