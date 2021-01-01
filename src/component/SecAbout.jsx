import React from "react";
/* component */
import AboutContent from "../component/AboutContent";
import HalfImg from "../pato images/blog/story.jpg";
/* libraries */
import { Container, Row, Col } from "react-bootstrap";
import Title from "../component/Title";
import AboutImg from "./AboutImg";

export default function SecAbout() {
  return (
    <div className="AboutSec ">
      <div className=" ">
        <Container>
          <Row>
            <Col md={6}>
              {/* <div className="AboutImg">
                <img className="HalfImg" src={HalfImg} alt="HalfImg" />
              </div> */}
              <AboutImg src={HalfImg} />
            </Col>
            <Col md={6}>
              <div className="titDiv">
                <Title
                  className="black-tit mb-0 pb-0"
                  secTit="Romantic"
                  firstTit="RESTAURANT"
                />
              </div>

              <AboutContent />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
