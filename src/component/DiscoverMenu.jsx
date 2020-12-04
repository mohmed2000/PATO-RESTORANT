/* component */
import Title from "./Title";
import DiscoverBtn from "./DiscoverBtn";
/* libraries */
import { Container, Row, Col } from "react-bootstrap";
/* images */
import Card1 from "../pato images/our-menu/our-menu-01.jpg";
import Card2 from "../pato images/our-menu/our-menu-05.jpg";
import Card3 from "../pato images/our-menu/our-menu-08.jpg";
import Card4 from "../pato images/our-menu/our-menu-10.jpg";
import Card5 from "../pato images/our-menu/our-menu-13.jpg";
import Card6 from "../pato images/our-menu/our-menu-16.jpg";

export default function DiscoverMenu() {
  return (
    <div className="DiscoverMenu">
      <Title secTit="Discover" firstTit="OUR MENU" className="black-tit" />
      <Container fluid="lg">
        <Row>
          <Col md={4} sm={6}>
            <div className="card-img DiscoverMenuCard my-3">
              <img className="HalfImg" src={Card1} alt="Card1" />
              <DiscoverBtn btnText="Lunch" />
            </div>
          </Col>
          <Col md={4} sm={6}>
            <div className="card-img DiscoverMenuCard my-3">
              <img className="HalfImg" src={Card2} alt="Card2" />
              <DiscoverBtn btnText="Dinner" />
            </div>
          </Col>
          <Col md={4}>
            <Row>
              <Col md={12}>
                <div className="card-img DiscoverMenuCard my-3">
                  <img className="HalfImg" src={Card3} alt="Card3" />
                  <DiscoverBtn btnText="Drink" />
                </div>
              </Col>
              <Col md={12}>
                <div className="card-img DiscoverMenuCard my-3">
                  <img className="HalfImg" src={Card4} alt="Card4" />
                  <DiscoverBtn btnText="Starters" />
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={8}>
            <div className="card-img DiscoverMenuCard my-3 ">
              <img className="HalfImg" src={Card5} alt="Card5" />
              <DiscoverBtn btnText="Happy Hour" />
            </div>
          </Col>
          <Col md={4}>
            <div className="card-img DiscoverMenuCard my-3">
              <img className="HalfImg" src={Card6} alt="Card6" />
              <DiscoverBtn btnText="Dessert" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
