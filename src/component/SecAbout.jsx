import React from "react";
/* component */
import AboutContent from "../component/AboutContent";
import HalfImg from "../pato images/blog/blog-01.jpg";
/* libraries */
import { Container, Row, Col } from "react-bootstrap";
import Title from "../component/Title";

export default function SecAbout() {
  return (
    <div className="AboutSec ">
      <div className="AboutSec2 SecAbout">
        <Container>
          <Row>
            <Col md={6}>
              <div className="AboutImg">
                <img className="HalfImg" src={HalfImg} alt="HalfImg" />
              </div>
            </Col>
            <Col md={6}>
              <Title
                className="black-tit mb-0 pb-0"
                secTit="Romantic"
                firstTit="RESTAURANT"
              />
              <AboutContent />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
