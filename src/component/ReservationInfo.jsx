import { useState } from "react";
/* component */
import Title from "./Title";
/* libraries */
import { Row, Col } from "react-bootstrap";
export default function ReservationInfo(props) {
  const [Required, setRequired] = useState(0);
  const [Name, setName] = useState(0);
  const [Phone, setPhone] = useState(0);
  const [Email, setEmail] = useState(0);

  function handleRequired1(e) {
    const RequiredRegex = /^[^\s]+$/;
    const RequiredRegexValue1 = RequiredRegex.test(e.target.value);
    if (RequiredRegexValue1) {
      setRequired(0);
    } else {
      setRequired(1);
    }
  }

  function handleRequiredName(e) {
    const RequiredRegex = /^[^\s]+$/;
    const RequiredRegexValue2 = RequiredRegex.test(e.target.value);
    if (RequiredRegexValue2) {
      setRequired(0);
    } else {
      setRequired(2);
    }
    handleName(e);
  }

  function handleRequired3(e) {
    const RequiredRegex = /^[^\s]+$/;
    const RequiredRegexValue3 = RequiredRegex.test(e.target.value);
    if (RequiredRegexValue3) {
      setRequired(0);
    } else {
      setRequired(3);
    }
  }

  function handleRequiredPhone(e) {
    const RequiredRegex = /^[^\s]+$/;
    const RequiredRegexValue4 = RequiredRegex.test(e.target.value);
    if (RequiredRegexValue4) {
      setRequired(0);
    } else {
      setRequired(4);
    }
    handlePhone(e);
  }

  function handleRequired5(e) {
    const RequiredRegex = /^[^\s]+$/;
    const RequiredRegexValue5 = RequiredRegex.test(e.target.value);
    if (RequiredRegexValue5) {
      setRequired(0);
    } else {
      setRequired(5);
    }
  }

  function handleRequiredEmail(e) {
    const RequiredRegex = /^[^\s]+$/;
    const RequiredRegexValue6 = RequiredRegex.test(e.target.value);
    if (RequiredRegexValue6) {
      setRequired(0);
    } else {
      setRequired(6);
    }
    handleEmail(e);
  }
  function handleName(e) {
    const NameRegex = /^(mr|MR|Mr)?[a-zA-Z]{3,15}$/;
    const NameRegexValue = NameRegex.test(e.target.value);
    if (NameRegexValue) {
      setName(0);
    } else {
      setName(1);
    }
  }
  function handlePhone(e) {
    const PhoneRegex = /^\d{7,}$/;
    const PhoneRegexValue = PhoneRegex.test(e.target.value);
    if (PhoneRegexValue) {
      setPhone(0);
    } else {
      setPhone(1);
    }
  }
  function handleEmail(e) {
    const EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const EmailRegexValue = EmailRegex.test(e.target.value);
    if (EmailRegexValue) {
      setEmail(0);
    } else {
      setEmail(1);
    }
  }
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
            className="form-input Date-input "
            type="date"
            name="Date"
            id="Date"
            onKeyUp={(e) => handleRequired1(e)}
          />
          {Required === 1 && (
            <div className="text-danger">this is Required</div>
          )}
        </Col>
        <Col>
          <label className="form-label " htmlFor="Name">
            Name
          </label>
          <br />
          <input
            className="form-input form-input-text mt-0 "
            type="text"
            name="Name"
            id="Name"
            onKeyUp={(e) => handleRequiredName(e)}
          />
          {Required === 2 && (
            <div className="text-danger">this is Required</div>
          )}
          {Name === 1 && (
            <div className="text-danger">name should be 3-15 letter</div>
          )}
        </Col>
        <Col>
          <label className="form-label mt-2" htmlFor="Time">
            Time
          </label>
          <br />
          <select
            className="form-input form-select"
            name="Time"
            id="Time"
            onKeyUp={(e) => handleRequired3(e)}
          >
            <option>9:00</option>
            <option>9:30</option>
            <option>10:00</option>
            <option>10:30</option>
            <option>11:00</option>
            <option>11:30</option>
            <option>12:00</option>
          </select>
          {Required === 3 && (
            <div className="text-danger">this is Required</div>
          )}
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
            onKeyUp={(e) => handleRequiredPhone(e)}
          />
          {Required === 4 && (
            <div className="text-danger">this is Required</div>
          )}
          {Phone === 1 && (
            <div className="text-danger">phone should be number</div>
          )}
        </Col>
        <Col>
          <label className="form-label mt-2" htmlFor="People">
            People
          </label>
          <br />
          <select
            className="form-input form-select"
            name="People"
            onKeyUp={(e) => handleRequired5(e)}
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
          {Required === 5 && (
            <div className="text-danger">this is Required</div>
          )}
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
            onKeyUp={(e) => handleRequiredEmail(e)}
          />
          {Required === 6 && (
            <div className="text-danger">this is Required</div>
          )}
          {Email === 1 && (
            <div className="text-danger">
              Email should be example@example.com
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
