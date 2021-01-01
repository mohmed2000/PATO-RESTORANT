import React from "react";
/* component */
import AboutContent from "../component/AboutContent";
import AboutImg from "../component/AboutImg";
import Title from "../component/Title";

import HalfImg from "../pato images/our-story-01.jpg";

/* libraries */
import { Container, Row, Col } from "react-bootstrap";

export default function AboutSec() {
  return (
    <div className="AboutSec">
      <div className="AboutSec2">
        <Container>
          <Row>
            <Col md={6}>
              <Title
                className="black-tit mb-0 pb-0"
                secTit="Italian Restaurant"
                firstTit="WELCOME"
              />
              <AboutContent />
            </Col>
            <Col md={6}>
              <AboutImg src={HalfImg} />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
