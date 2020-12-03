import React from "react";
/* component */
import AboutContent from "../component/AboutContent";
import AboutImg from "../component/AboutImg";
/* libraries */
import { Container, Row, Col } from "react-bootstrap";

export default function AboutSec() {
  return (
    <div className="AboutSec ">
      <div className="AboutSec2">
        <Container>
          <Row>
            <Col md={6}>
              <AboutContent />
            </Col>
            <Col md={6}>
              <AboutImg />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
