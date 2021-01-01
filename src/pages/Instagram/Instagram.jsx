/* component */
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";
import Tabs from "../../component/Tabs";
import "./Instagram.css";
import PageHeader from "../../component/PageHeader";
import { useEffect } from "react";
export default function Instagram() {
  useEffect(() => {
    document.title = "Instagram";
  }, []);
  return (
    <div>
      <Navside />
      <Navbar />
      <PageHeader title="Instagram" />
      <Tabs />
      <SubEmail />
      <Footer />
    </div>
  );
}
