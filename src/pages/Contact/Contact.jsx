import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
// import Maps from "../../component/Maps";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import MapContainer from "../../component/Mapcontainer";
import ContactForm from "../../component/ContactForm";

export default function Contact() {
  return (
    <div>
      <Navside />
      <Navbar />
      <div className="ReservationImg ">
        <div className="layer0">
          <h2 className="ReservationTit">Contact</h2>
        </div>
      </div>
      <MapContainer />
      <ContactForm />
      <Footer />
    </div>
  );
}
