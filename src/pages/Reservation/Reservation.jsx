/* component */
import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import ReservationInfo from "../../component/ReservationInfo";
import "../Reservation/Reservation.css";
import { Col, Container, Row } from "react-bootstrap";
import PageHeader from "../../component/PageHeader";

export default function Reservation() {
  return (
    <div>
      <Navside />
      <Navbar />
      <PageHeader title="Reservation" />
      <div className="ReservationInfo ">
        <div className="myContainer">
          <ReservationInfo />
          <button className="ReservationBtn">BOOK TABLE</button>
        </div>
        <div className="ReservationPara">
          <Container fluid="lg">
            <Row>
              <Col md={6}>
                <h4 className="ReservationParaTit">RESERVE BY PHONE</h4>
                <p className="ReservationParaP">
                  Donec quis euismod purus. Donec feugiat ligula rhoncus, varius
                  nisl sed, tincidunt lectus. Nulla vulputate , lectus vel
                  volutpat efficitur, orci lacus sodales sem, sit amet quam:
                  <span className="ReservationSpan">(001) 345 6889 </span>
                </p>
              </Col>
              <Col md={6}>
                <h4 className="ReservationParaTit">FOR EVENT BOOKING</h4>
                <p className="ReservationParaP">
                  Donec feugiat ligula rhoncus:
                  <span className="ReservationSpan">(001) 345 6889 </span> ,
                  varius nisl sed, tinci-dunt lectus sodales sem.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <Footer />
    </div>
  );
}
