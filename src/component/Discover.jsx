/* component */
import DiscoverCard from "./DiscoverCard";
/* images */
import Card1 from "../pato images/intro/intro-01.jpg";
import Card2 from "../pato images/intro/intro-02.jpg";
import Card3 from "../pato images/intro/intro-04.jpg";
/* libraries */
import { Container, Row, Col } from "react-bootstrap";
export default function Discover(props) {
  return (
    <div>
      <div className="Discover-cards ">
        <Container fluid="lg">
          <Row>
            <Col md={4}>
              <DiscoverCard
                className="Discover-card"
                src={Card1}
                cardTit="ROMANTIC RESTAURANT"
                cardP="Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros."
                to="/About"
                linkCard="LEARN MORE"
              />
            </Col>
            <Col md={4}>
              <DiscoverCard
                className="Discover-card"
                src={Card2}
                cardTit="DELICIOUS FOOD"
                cardP="Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna"
                to="/About"
                linkCard="LEARN MORE"
              />
            </Col>
            <Col md={4}>
              <DiscoverCard
                className="Discover-card"
                src={Card3}
                cardTit="RED WINES YOU LOVE"
                cardP="Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
                to="/About"
                linkCard="LEARN MORE"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
