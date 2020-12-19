import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
//
/* images */
import img1 from "../pato images/gallery/photo-gallery-01.jpg";
import img2 from "../pato images/gallery/photo-gallery-02.jpg";
import img3 from "../pato images/gallery/photo-gallery-03.jpg";
import img4 from "../pato images/gallery/photo-gallery-04.jpg";
import img5 from "../pato images/gallery/photo-gallery-05.jpg";
import img6 from "../pato images/gallery/photo-gallery-06.jpg";
import img7 from "../pato images/gallery/photo-gallery-07.jpg";
import img8 from "../pato images/gallery/photo-gallery-08.jpg";
import img9 from "../pato images/gallery/photo-gallery-09.jpg";
//
export default function Tabs() {
  /* variables */

  /* states */
  const [Tabs, setTabs] = useState(0);
  //
  /* functions */
  const allPhoto = () => {
    setTabs(0);
  };
  const blog = () => {
    setTabs(1);
  };
  const food = () => {
    setTabs(2);
  };
  const event = () => {
    setTabs(3);
  };
  const vipGuests = () => {
    setTabs(4);
  };
  //jsx
  // className={setTabs === true ? "hide tab " : "tab"}

  return (
    <div className="TabsSec">
      <div className="Tabs">
        <button className="tab" onClick={allPhoto}>
          all photo
        </button>
        <button className="tab" onClick={blog}>
          blog
        </button>
        <button className="tab" onClick={food}>
          food
        </button>
        <button className="tab" onClick={event}>
          event
        </button>
        <button className="tab" onClick={vipGuests}>
          vip guests
        </button>
      </div>
      <Container fluid>
        <div className="tabsImg TabContainer">
          <Row>
            <Col
              className={
                Tabs === 1
                  ? " hide"
                  : Tabs === 3
                  ? " hide"
                  : Tabs === 4
                  ? " hide"
                  : ""
              }
              md={4}
            >
              <div className="img1Div">
                <div className="imgDiv">
                  <img className="img-fluid tabImg" src={img1} alt="tabImg" />
                </div>
                <div className="tabLayer">
                  <i className="tabIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </div>
              </div>
            </Col>
            <Col
              className={
                Tabs === 1
                  ? " hide"
                  : Tabs === 2
                  ? "hide"
                  : Tabs === 3
                  ? "hide"
                  : Tabs === 4
                  ? "hide"
                  : ""
              }
              md={4}
            >
              <div className="img1Div">
                <div className="imgDiv">
                  <img className="img-fluid tabImg" src={img2} alt="tabImg" />
                </div>
                <div className="tabLayer">
                  <i className="tabIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </div>
              </div>
            </Col>
            <Col
              className={Tabs === 3 ? " hide" : Tabs === 4 ? " hide" : ""}
              md={4}
            >
              <div className="img1Div">
                <div className="imgDiv">
                  <img className="img-fluid tabImg" src={img3} alt="tabImg" />
                </div>
                <div className="tabLayer">
                  <i className="tabIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </div>
              </div>
            </Col>
            <Col
              className={
                Tabs === 1
                  ? " hide"
                  : Tabs === 3
                  ? " hide"
                  : Tabs === 4
                  ? " hide"
                  : ""
              }
              md={4}
            >
              <div className="img1Div">
                <div className="imgDiv">
                  <img className="img-fluid tabImg" src={img4} alt="tabImg" />
                </div>
                <div className="tabLayer">
                  <i className="tabIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </div>
              </div>
            </Col>
            <Col
              className={Tabs === 1 ? " hide" : Tabs === 2 ? "hide" : ""}
              md={4}
            >
              <div className="img1Div">
                <div className="imgDiv">
                  <img className="img-fluid tabImg" src={img5} alt="tabImg" />
                </div>
                <div className="tabLayer">
                  <i className="tabIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </div>
              </div>
            </Col>
            <Col
              className={Tabs === 1 ? " hide" : Tabs === 2 ? "hide" : ""}
              md={4}
            >
              <div className="img1Div">
                <div className="imgDiv">
                  <img className="img-fluid tabImg" src={img6} alt="tabImg" />
                </div>
                <div className="tabLayer">
                  <i className="tabIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </div>
              </div>
            </Col>
            <Col
              className={
                Tabs === 1
                  ? " hide"
                  : Tabs === 2
                  ? "hide"
                  : Tabs === 4
                  ? "hide"
                  : ""
              }
              md={4}
            >
              <div className="img1Div">
                <div className="imgDiv">
                  <img className="img-fluid tabImg" src={img7} alt="tabImg" />
                </div>
                <div className="tabLayer">
                  <i className="tabIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </div>
              </div>
            </Col>
            <Col
              className={Tabs === 3 ? " hide" : Tabs === 4 ? " hide" : ""}
              md={4}
            >
              <div className="img1Div">
                <div className="imgDiv">
                  <img className="img-fluid tabImg" src={img8} alt="tabImg" />
                </div>
                <div className="tabLayer">
                  <i className="tabIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </div>
              </div>
            </Col>
            <Col
              className={
                Tabs === 2
                  ? " hide"
                  : Tabs === 3
                  ? " hide"
                  : Tabs === 4
                  ? " hide"
                  : ""
              }
              md={4}
            >
              <div className="img1Div">
                <div className="imgDiv">
                  <img className="img-fluid tabImg" src={img9} alt="tabImg" />
                </div>
                <div className="tabLayer">
                  <i className="tabIcon">
                    <FontAwesomeIcon icon={faSearch} />
                  </i>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
