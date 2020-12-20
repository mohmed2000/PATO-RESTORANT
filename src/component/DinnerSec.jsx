import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../pato images/dinner/dinner-01.jpg";
import img2 from "../pato images/dinner/dinner-02.jpg";
import img3 from "../pato images/dinner/dinner-03.jpg";
import img4 from "../pato images/dinner/dinner-04.jpg";
import img5 from "../pato images/dinner/dinner-05.jpg";
import img6 from "../pato images/dinner/dinner-06.jpg";
import DinnerItem from "./DinnerItem";
export default function DinnerSec(props) {
  return (
    <div>
      <div className="dinner">
        <h3 className="black-tit text-white lunchtit">dinner</h3>
      </div>
      <Container className="lunchItems" fluid="lg">
        <Row>
          <Col>
            <div className="dinnerLeft">
              <DinnerItem
                imgdinner={img1}
                h3="SED VARIUS"
                span="Aenean pharetra tortor dui in pellentesque"
                p="$59.19"
              />
              <DinnerItem
                imgdinner={img2}
                h3="TEMPUS ALIQUET"
                span="Aenean condimentum ante erat"
                p="$22.59"
              />
              <DinnerItem
                imgdinner={img3}
                h3="DUIS MASSA"
                span="Aenean pharetra  dui in movobs "
                p="$24.79"
              />
            </div>
          </Col>
          <Col>
            <div className="dinnerRight">
              <DinnerItem
                imgdinner={img4}
                h3="TEMPUS ALIQUET"
                span="Aenean condimentum ante erat"
                p="$22.59"
              />
              <DinnerItem
                imgdinner={img5}
                h3="DUIS MASSA"
                span="Aenean pharetra  dui in movobs "
                p="$24.79"
              />
              <DinnerItem
                imgdinner={img6}
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
