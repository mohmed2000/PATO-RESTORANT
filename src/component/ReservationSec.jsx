/* component */
import ReservationInfo from "./ReservationInfo";
import Button from "./Button";

/* libraries */
import { Container, Row, Col } from "react-bootstrap";

/* images */

export default function ReservationSec(props) {
  const { hgzImg, hgzimgclass } = props;
  return (
    <div className="ReservationSec">
      <Container fluid="lg">
        <Row>
          <Col>
            <ReservationInfo />
            <Button btnText="BOOK TABLE" />
          </Col>
          <Col>
            <div className="AboutImg mt-4 ">
              <img className={hgzimgclass} src={hgzImg} alt="HalfImg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
