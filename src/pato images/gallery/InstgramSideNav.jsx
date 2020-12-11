/* libraries */
import { Container, Row, Col } from "react-bootstrap";

import img1 from "./photo-gallery-01.jpg";
import img2 from "./photo-gallery-02.jpg";
import img3 from "./photo-gallery-03.jpg";
import img5 from "./photo-gallery-05.jpg";
import img6 from "./photo-gallery-06.jpg";
import img7 from "./photo-gallery-07.jpg";
import img9 from "./photo-gallery-09.jpg";
import img10 from "./photo-gallery-10.jpg";
import img11 from "./photo-gallery-11.jpg";
export default function InstagramSideNav(props) {
  const { className } = props;
  return (
    <div>
      <Container fluid="lg">
        <Row>
          <Col md={4}>
            <div className={className}>
              <img src={img1} alt="imgfooter" />
              <div className="layer"></div>
            </div>
          </Col>
          <Col md={4}>
            <div className={className}>
              <img src={img2} alt="imgfooter" />
              <div className="layer"></div>
            </div>
          </Col>
          <Col md={4}>
            <div className={className}>
              <img src={img3} alt="imgfooter" />
              <div className="layer"></div>
            </div>
          </Col>

          <Col md={4}>
            <div className={className}>
              <img src={img5} alt="imgfooter" />
              <div className="layer"></div>
            </div>
          </Col>
          <Col md={4}>
            <div className={className}>
              <img src={img6} alt="imgfooter" />
              <div className="layer"></div>
            </div>
          </Col>
          <Col md={4}>
            <div className={className}>
              <img src={img7} alt="imgfooter" />
              <div className="layer"></div>
            </div>
          </Col>

          <Col md={4}>
            <div className={className}>
              <img src={img9} alt="imgfooter" />
              <div className="layer"></div>
            </div>
          </Col>
          <Col md={4}>
            <div className={className}>
              <img src={img10} alt="imgfooter" />
              <div className="layer"></div>
            </div>
          </Col>
          <Col md={4}>
            <div className={className}>
              <img src={img11} alt="imgfooter" />
              <div className="layer"></div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
