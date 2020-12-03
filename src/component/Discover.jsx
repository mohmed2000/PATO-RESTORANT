/* libraries */
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
/* component */
import Title from "./Title";
/* images */
import Card1 from "../pato images/intro/intro-01.jpg";
import Card2 from "../pato images/intro/intro-02.jpg";
import Card3 from "../pato images/intro/intro-04.jpg";
import { Link } from "react-router-dom";
export default function Discover(props) {
  const {} = props;
  return (
    <div>
      <div className="Discover">
        <Title
          secTit="Discover"
          firstTit="PATO PLACE"
          className="black-tit text-white"
        />
      </div>
      <div className="Discover-cards ">
        <Container fluid="md">
          <Row>
            <Col md={4}>
              <div className="Discover-card">
                <div className="card-img">
                  <img className="img-fluid HalfImg " src={Card1} alt="Card1" />
                </div>
                <h4 className="card-tit my-4">ROMANTIC RESTAURANT</h4>
                <p className="card-p">
                  Phasellus lorem enim, luctus ut velit eget, con-vallis egestas
                  eros.
                </p>
                <Link to="/About" className="Go-about link-card">
                  LEARN MORE &nbsp;
                  <span>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </span>
                </Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="Discover-card">
                <div className="card-img ">
                  <img className="img-fluid  HalfImg" src={Card2} alt="Card2" />
                </div>
                <h4 className="card-tit my-4">DELICIOUS FOOD </h4>
                <p className="card-p">
                  Aliquam eget aliquam magna, quis posuere risus ac justo ipsum
                  nibh urna .
                </p>
                <Link to="/About" className="Go-about link-card">
                  LEARN MORE &nbsp;
                  <span>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </span>
                </Link>
              </div>
            </Col>
            <Col md={4}>
              <div className="Discover-card">
                <div className="card-img">
                  <img className="img-fluid HalfImg" src={Card3} alt="Card3" />
                </div>
                <h4 className="card-tit my-4">RED WINES YOU LOVE</h4>
                <p className="card-p">
                  Sed ornare ligula eget tortor tempor, quis porta tellus
                  dictum.
                </p>
                <Link to="/About" className="Go-about link-card">
                  LEARN MORE &nbsp;
                  <span>
                    <FontAwesomeIcon icon={faLongArrowAltRight} />
                  </span>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
