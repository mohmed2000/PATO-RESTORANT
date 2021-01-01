/* component */
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";
import "../Menu/Menu.css";
import MainMenu from "../../component/MainMenu";
import LunchSec from "../../component/LunchSec";
import DinnerSec from "../../component/DinnerSec";
import PageHeader from "../../component/PageHeader";
import { useEffect } from "react";
export default function Menu() {
  useEffect(() => {
    document.title = "Menu";
  }, []);
  return (
    <div>
      <Navside />
      <Navbar />
      <PageHeader title="Menu" />
      <MainMenu />
      <LunchSec />
      <DinnerSec />
      <SubEmail />
      <Footer />
    </div>
  );
}
