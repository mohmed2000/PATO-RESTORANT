import Logo from "../pato images/logo.png";
import { Link } from "react-router-dom";

import { Container, Row, Col } from "react-bootstrap";
/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function Navbar() {
  // function openNav() {
  //   document.getElementById("mySidenav").style.width = "250px";
  //   document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  // }

  // function closeNav() {
  //   document.getElementById("mySidenav").style.width = "";
  //   document.body.style.backgroundColor = "white";
  // }

  return (
    <div className="headernav">
      <div className="wrap-menu">
        <Container fluid="xl">
          <Row>
            <Col md={12}>
              <nav className="myNav">
                <div className=" h-50">
                  <img src={Logo} alt="" />
                </div>
                <ul className="navUl h-100 ">
                  <li className="navLi">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="navLi">
                    <Link to="/Menu">Menu</Link>
                  </li>
                  <li className="navLi">
                    <Link to="/Reservation">Reservation</Link>
                  </li>
                  <li className="navLi">
                    <Link to="/About">Instagram</Link>
                  </li>
                  <li className="navLi">
                    <Link to="/About">About</Link>
                  </li>
                  <li className="navLi">
                    <Link to="/About">Blog</Link>
                  </li>
                  <li className="navLi">
                    <Link to="/Contact">Contact</Link>
                  </li>
                </ul>
                <div className="setIcon iconNav">
                  <span className="iconNava ml-3">
                    <a className="instaicon" href="https://www.instagram.com/">
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </span>
                  <span className="iconNava ml-3">
                    <a href="https://www.facebook.com/">
                      <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                  </span>
                  <span className="iconNava ml-3">
                    <a href="https://www.twitter.com/">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </span>
                  <button className="nav3-" onclick={"openNav()"}></button>
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
