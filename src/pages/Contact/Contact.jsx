import Footer from "../../component/Footer";
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
// import Maps from "../../component/Maps";
import "./Contact.css";
import MapContainer from "../../component/Mapcontainer";
import ContactForm from "../../component/ContactForm";
import PageHeader from "../../component/PageHeader";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <div>
      <Navside />
      <Navbar />
      <PageHeader title="Contact" />
      <MapContainer />
      <ContactForm />
      <Footer />
    </div>
  );
}
