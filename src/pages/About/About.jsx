/* component */
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";
import "./About.css";
import Story from "../../component/Story";
import OurVideo from "../../component/OurVideo";
import AboutSec from "../../component/AboutSec";
import SecAbout from "../../component/SecAbout";
import OurChef from "../../component/OurChef";

export default function About() {
  return (
    <div>
      <Navside />
      <Navbar />
      <div className="ReservationImg ">
        <div className="layer0">
          <h2 className="ReservationTit">About</h2>
        </div>
      </div>
      <Story />
      <OurVideo />
      <AboutSec />
      <SecAbout />
      <OurChef />
      <SubEmail />
      <Footer />
    </div>
  );
}
