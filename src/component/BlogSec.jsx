/* component */
import DiscoverCard from "./DiscoverCard";
import Title from "./Title";
/* images */
import Card1 from "../pato images/blog/blog-01.jpg";
import Card2 from "../pato images/blog/blog-02.jpg";
import Card3 from "../pato images/blog/blog-03.jpg";
/* libraries */
import { Container, Row, Col } from "react-bootstrap";
export default function Discover(props) {
  const {} = props;
  return (
    <div className="BlogSec">
      <Title secTit="Latest News" firstTit="THE BLOG" className="black-tit" />
      <div className="Discover-cards">
        <Container fluid="lg">
          <Row>
            <Col md={4}>
              <DiscoverCard
                className="Discover-card blog-card"
                src={Card1}
                cardTit="BEST PLACES FOR WINE"
                cardP="Phasellus lorem enim, luctus ut velit eget, con-vallis egestas eros."
                to="/"
                linkCard="CONTINUE READING"
              />
            </Col>
            <Col md={4}>
              <DiscoverCard
                className="Discover-card blog-card"
                src={Card2}
                cardTit="EGGS AND CHEESE"
                cardP="Aliquam eget aliquam magna, quis posuere risus ac justo ipsum nibh urna"
                to="/"
                linkCard="CONTINUE READING"
              />
            </Col>
            <Col md={4}>
              <DiscoverCard
                className="Discover-card blog-card"
                src={Card3}
                cardTit="STYLE THE WEDDING PARTY"
                cardP="Sed ornare ligula eget tortor tempor, quis porta tellus dictum."
                to="/Home"
                linkCard="CONTINUE READING"
              />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
