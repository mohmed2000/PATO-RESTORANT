/* component */
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";
import Tabs from "../../component/Tabs";
import "./Instagram.css";
export default function Instagram() {
  return (
    <div>
      <Navside />
      <Navbar />
      <div className="ReservationImg ">
        <div className="layer0">
          <h2 className="ReservationTit">Instgram</h2>
        </div>
      </div>
      <Tabs />
      <SubEmail />
      <Footer />
    </div>
  );
}
