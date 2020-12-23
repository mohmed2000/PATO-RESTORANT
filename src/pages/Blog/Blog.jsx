/* component */
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";
import BlogSec from "../../component/BlogSec";
import "./Blog.css";
import { Link } from "react-router-dom";
export default function Blog() {
  return (
    <div>
      <Navside />
      <Navbar />
      <div className="ReservationImg ">
        <div className="layer0">
          <h2 className="ReservationTit">Blog</h2>
        </div>
      </div>
      <BlogSec />
      <SubEmail />
      <Footer />
    </div>
  );
}
