import { useState } from "react";
/* libraries */
import { Row, Col, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
export default function ContactForm() {
  const [Required, setRequired] = useState(0);
  const [Name, setName] = useState(0);
  const [Phone, setPhone] = useState(0);
  const [Email, setEmail] = useState(0);

  function handleRequired4(e) {
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
    const EmailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    const EmailRegexValue = EmailRegex.test(e.target.value);
    if (EmailRegexValue) {
      setEmail(0);
    } else {
      setEmail(1);
    }
  }

  return (
    <div className="ContactForm">
      <h3 className="contactTit">Send us a Message</h3>
      <Container className="ContactRow" fluid>
        <Row className="ContactRow">
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
              placeholder="Name"
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
            <label className="form-label " htmlFor="Email">
              Email
            </label>
            <br />
            <input
              className="form-input form-input-text mt-0"
              type="text"
              name="Email"
              id="Email"
              placeholder="Email"
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
          <Col>
            <label className="form-label " htmlFor="Phone">
              Phone
            </label>
            <br />
            <input
              className="form-input form-input-text mt-0"
              type="text"
              name="Phone"
              id="Phone"
              placeholder="Phone"
              onKeyUp={(e) => handleRequiredPhone(e)}
            />
            {Required === 4 && (
              <div className="text-danger">this is Required</div>
            )}
            {Phone === 1 && (
              <div className="text-danger">phone should be number</div>
            )}
          </Col>
          <Col md={12}>
            <label className="form-label mt-4" htmlFor="Phone">
              Message
            </label>
            <textarea
              className="form-input mytextarea form-input-text mt-0"
              name="Message"
              placeholder="Message "
              id="Message"
              onKeyUp={(e) => handleRequired4(e)}
            ></textarea>
            {Required === 1 && (
              <div className="text-danger">this is Required</div>
            )}
          </Col>
          <Col md={12}>
            <button className="contactBtn">submit</button>
          </Col>
        </Row>
      </Container>
      <Container fluid="lg">
        <Row className="ContactRow2">
          <Col>
            <div className="locationDiv">
              <div className="locationIcon">
                <FontAwesomeIcon className="" icon={faMapMarkerAlt} />
              </div>
              <div className="locationContent">
                <h3 className="ContactTit">LOCATION</h3>
                <p className="locationP">
                  8th floor, 379 Hudson St, New York, NY 10018
                </p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="locationDiv">
              <div className="locationIcon">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </div>
              <div className="locationContent">
                <h3 className="ContactTit">CALL US</h3>
                <p className="locationP">(+1) 96 716 6879</p>
              </div>
            </div>
          </Col>

          <Col>
            <div className="locationDiv">
              <div className="locationIcon">
                <FontAwesomeIcon icon={faClock} />
              </div>
              <div className="locationContent">
                <h3 className="ContactTit">OPENING HOURS</h3>
                <p className="locationP">09:30 AM – 11:00 PM Every Day</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
