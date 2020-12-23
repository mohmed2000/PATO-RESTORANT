/* component */
import Navbar from "../../component/Navbar";
import Navside from "../../component/Navside";
import SubEmail from "../../component/SubEmail";
import Footer from "../../component/Footer";
import Card1 from "../../pato images/blog/blog-01.jpg";

import "./Blog.css";
import { Link } from "react-router-dom";
export default function BlogDetail() {
  return (
    <div>
      <Navside />
      <Navbar />
      <div className="ReservationImg ">
        <div className="layer0">
          <h2 className="ReservationTit">BlogDetail</h2>
          <div className="linkNav">
            <Link className="link" to="/">
              Home
            </Link>
            /
            <Link className="link" to="/Blog">
              Blog
            </Link>
            /
            <Link className="link" to="/BlogDetail">
              BlogDetail
            </Link>
          </div>
        </div>
      </div>
      <div className="Discover-card blog-card my-5 w-75 m-auto pt-5 ">
        <div className="card-img w-75 h-75 my-5">
          <img className="img-fluid HalfImg " src={Card1} alt="Card1" />
        </div>
        <h4 className="card-tit my-4">"BEST PLACES FOR WINE"</h4>
        <p className="card-p w-75">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget
          mi sem. Nulla facilisi. Sed ultricies eros a nibh tempus, in sodales
          mi vestibulum. Nullam quis dui ac nisl ultrices euismod et sit amet
          urna. Morbi semper sapien quis ex tempor, sit amet scelerisque eros
          rhoncus. Cras scelerisque auctor gravida. Nunc fermentum luctus
          rhoncus. Nulla vulputate fermentum convallis. In quis pellentesque
          tortor. Cras metus nibh, gravida vitae ante vel, finibus semper
          tellus. Nulla vel tincidunt magna. Morbi tempor velit lectus, eu
          commodo quam volutpat vitae,Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus eget mi sem. Nulla facilisi. Sed ultricies
          eros a nibh tempus, in sodales mi vestibulum. Nullam quis dui ac nisl
          ultrices euismod et sit amet urna. Morbi semper sapien quis ex tempor,
          "
        </p>
      </div>
      <SubEmail />
      <Footer />
    </div>
  );
}
