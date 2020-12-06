/* component */
import Title from "./Title";
 event-sec_fix-reservation-sec
import Button from "./Button";
=======
 main
/* libraries */
import { Container, Row, Col } from "react-bootstrap";

/* images */
import HalfImg from "../pato images/booking-01.jpg";

export default function ReservationSec() {
  return (
    <div className="ReservationSec">
      <Container fluid="lg">
        <Row>
          <Col>
            <Title
              secTit="Reservation"
              firstTit="BOOK TABLE"
              className="black-tit"
            />
            <Row>
              <Col>
                <label className="form-label Date-input" htmlFor="Date">
                  Date
                </label>
                <br />
                <input
 event-sec_fix-reservation-sec
                  className="form-input Date-input"
=======
                  className="form-input"
 main
                  type="date"
                  name="Date"
                  id="Date"
                />
              </Col>
              <Col>
                <label className="form-label" htmlFor="Name">
                  Name
                </label>
                <br />
                <input
 event-sec_fix-reservation-sec
                  className="form-input form-input-text"
=======
                  className="form-input"
 main
                  type="text"
                  name="Name"
                  id="Name"
                />
              </Col>
              <Col>
                <label className="form-label" htmlFor="Time">
                  Time
                </label>
                <br />
                <select
 event-sec_fix-reservation-sec
                  className="form-input form-select"
=======
                  className="form-input form-select1"
 main
                  name="Time"
                  id="Time"
                >
                  <option>9:00</option>
                  <option>9:30</option>
                  <option>10:00</option>
                  <option>10:30</option>
                  <option>11:00</option>
                  <option>11:30</option>
                  <option>12:00</option>
                </select>
              </Col>
              <Col>
                <label className="form-label" htmlFor="Phone">
                  Phone
                </label>
                <br />
                <input
 event-sec_fix-reservation-sec
                  className="form-input form-input-text"
=======
                  className="form-input"
 main
                  type="text"
                  name="Phone"
                  id="Phone"
                />
              </Col>
              <Col>
                <label className="form-label" htmlFor="People">
                  People
                </label>
                <br />
                <select
 event-sec_fix-reservation-sec
                  className="form-input form-select"
=======
                  className="form-input form-select2"
 main
                  name="People"
                  id="People"
                >
                  <option>1 person</option>
                  <option>2 person</option>
                  <option>3 person</option>
                  <option>4 person</option>
                  <option>5 person</option>
                  <option>6 person</option>
                  <option>7 person</option>
                </select>
              </Col>
              <Col>
                <label className="form-label" htmlFor="Email">
                  Email
                </label>
                <br />
                <input
 event-sec_fix-reservation-sec
                  className="form-input form-input-text"
=======
                  className="form-input"
 main
                  type="text"
                  name="Email"
                  id="Email"
                />
              </Col>
            </Row>
 event-sec_fix-reservation-sec
            <Button btnText="BOOK TABLE" />
=======
 main
          </Col>
          <Col md={{ order: "last" }}>
            <div className="AboutImg mt-4 ">
              <img className="HalfImg " src={HalfImg} alt="HalfImg" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
