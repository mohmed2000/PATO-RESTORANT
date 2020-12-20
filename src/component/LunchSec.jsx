import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../pato images/lunch/lunch-01.jpg";
import img2 from "../pato images/lunch/lunch-02.jpg";
import img3 from "../pato images/lunch/lunch-03.jpg";
import img4 from "../pato images/lunch/lunch-04.jpg";
import img5 from "../pato images/lunch/lunch-05.jpg";
import img6 from "../pato images/lunch/lunch-06.jpg";
import LunchItem from "./LunchItem";
export default function LunchSec(props) {
  return (
    <div>
      <div className="lunch">
        <h3 className="black-tit text-white lunchtit">Lunch</h3>
      </div>
      <Container className="lunchItems" fluid="lg">
        <Row>
          <Col>
            <div className="lunchLeft">
              <LunchItem
                imgLunch={img1}
                h3="SED VARIUS"
                span="Aenean pharetra tortor dui in pellentesque"
                p="$59.19"
              />
              <LunchItem
                imgLunch={img2}
                h3="TEMPUS ALIQUET"
                span="Aenean condimentum ante erat"
                p="$22.59"
              />
              <LunchItem
                imgLunch={img3}
                h3="DUIS MASSA"
                span="Aenean pharetra  dui in movobs "
                p="$24.79"
              />
            </div>
          </Col>
          <Col>
            <div className="lunchRight">
              <LunchItem
                imgLunch={img4}
                h3="TEMPUS ALIQUET"
                span="Aenean condimentum ante erat"
                p="$22.59"
              />
              <LunchItem
                imgLunch={img5}
                h3="DUIS MASSA"
                span="Aenean pharetra  dui in movobs "
                p="$24.79"
              />
              <LunchItem
                imgLunch={img6}
                h3="SED VARIUS"
                span="Aenean lacinia nisl dui in  nulla "
                p="$39.79"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
