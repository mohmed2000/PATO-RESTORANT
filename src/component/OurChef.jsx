import { Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import chef1 from "../pato images/avatar/avatar-01.jpg";
import chef2 from "../pato images/avatar/avatar-04.jpg";
import chef3 from "../pato images/avatar/avatar-05.jpg";
export default function OurChef() {
  return (
    <div className="OurChef">
      <Title className="black-tit" secTit="Meet Our" firstTit="CHEF" />
      <Container fluid="lg">
        <Row>
          <Col md={4}>
            <div className="chef">
              <div className="chefimgDiv">
                <img className="chefImg" src={chef1} alt="chef1" />
              </div>
              <div className="chefContent">
                <h3 className="chefTit">peter hart</h3>
                <span>chef</span>
                <p className="chefP">
                  Donec porta eleifend mauris ut effici-tur. Quisque non velit
                  vestibulum, lob-ortis mi eget.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="chef">
              <div className="chefimgDiv">
                <img className="chefImg" src={chef2} alt="chef1" />
              </div>
              <div className="chefContent">
                <h3 className="chefTit">jef bezo</h3>
                <span>chef</span>
                <p className="chefP">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                  ultricies felis a sem tempus tempus.
                </p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="chef">
              <div className="chefimgDiv">
                <img className="chefImg" src={chef3} alt="chef1" />
              </div>
              <div className="chefContent">
                <h3 className="chefTit">ben alwa</h3>
                <span className="">chef</span>
                <p className="chefP">
                  Phasellus aliquam libero a nisi varius, vitae placerat sem
                  aliquet. Ut at velit nec ipsum iaculis posuere.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
