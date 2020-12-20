/* component */
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";
import "../Menu/Menu.css";
import MainMenu from "../../component/MainMenu";
import LunchSec from "../../component/LunchSec";
import DinnerSec from "../../component/DinnerSec";
export default function Menu() {
  return (
    <div>
      <Navside />
      <Navbar />
      <div className="MenuImg">
        <h2 className="ReservationTit">Pato Menu</h2>
      </div>
      <MainMenu />
      <LunchSec />
      <DinnerSec />
      <SubEmail />
      <Footer />
    </div>
  );
}
