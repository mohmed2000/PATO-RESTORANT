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
import PageHeader from "../../component/PageHeader";

export default function About() {
  return (
    <div>
      <Navside />
      <Navbar />
      <PageHeader title="About" />
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
