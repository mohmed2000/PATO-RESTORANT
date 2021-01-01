/* component */
import ReservationInfo from "./ReservationInfo";

/* libraries */
import { Container, Row, Col } from "react-bootstrap";

/* images */

export default function ReservationSec(props) {
  const { hgzImg, hgzimgclass } = props;

  return (
    <div className="ReservationSec">
      <Container fluid="lg">
        <Row>
          <Col lg={6}>
            <ReservationInfo />
            <button
              className="Button M_SlideBtn "
              type="submit"
              // onSubmit={handleSubmit}
            >
              BOOK TABLE
            </button>
          </Col>
          <Col lg={6}>
            <div className="AboutImg mt-4  hgzImgDiv">
              <img className={hgzimgclass} src={hgzImg} alt="HalfImg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
