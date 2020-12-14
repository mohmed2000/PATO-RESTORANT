/* component */
import Title from "./Title";
/* libraries */
import { Row, Col } from "react-bootstrap";

/* images */

export default function ReservationInfo(props) {
  return (
    <div>
      <Title secTit="Reservation" firstTit="BOOK TABLE" className="black-tit" />
      <Row>
        <Col>
          <label className="form-label Date-input" htmlFor="Date">
            Date
          </label>
          <br />
          <input
            className="form-input Date-input"
            type="date"
            name="Date"
            id="Date"
          />
        </Col>
        <Col>
          <label className="form-label " htmlFor="Name">
            Name
          </label>
          <br />
          <input
            className="form-input form-input-text mt-0"
            type="text"
            name="Name"
            id="Name"
          />
        </Col>
        <Col>
          <label className="form-label mt-2" htmlFor="Time">
            Time
          </label>
          <br />
          <select className="form-input form-select" name="Time" id="Time">
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
          <label className="form-label mt-2" htmlFor="Phone">
            Phone
          </label>
          <br />
          <input
            className="form-input form-input-text"
            type="text"
            name="Phone"
            id="Phone"
          />
        </Col>
        <Col>
          <label className="form-label mt-2" htmlFor="People">
            People
          </label>
          <br />
          <select className="form-input form-select" name="People" id="People">
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
          <label className="form-label mt-2" htmlFor="Email">
            Email
          </label>
          <br />
          <input
            className="form-input form-input-text"
            type="text"
            name="Email"
            id="Email"
          />
        </Col>
      </Row>
    </div>
  );
}
