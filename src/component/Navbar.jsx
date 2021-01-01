import { useState, useEffect } from "react";

import Logo from "../pato images/logo.png";
import RedLogo from "../pato images/logoRed.png";
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
  const [navBg, setNavBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", handleNavBg);

    return () => {
      window.removeEventListener("scroll", handleNavBg);
    };
  }, []);
  const handleNavBg = () => {
    if (window.scrollY >= 10) {
      setNavBg(true);
    } else {
      setNavBg(false);
    }
  };

  return (
    <div className="">
      <div className={navBg === true ? "navBg wrap-menu" : "wrap-menu"}>
        <Container fluid="xl">
          <Row>
            <Col md={12}>
              <nav className="myNav">
                <div className=" h-50">
                  <img src={navBg === true ? RedLogo : Logo} alt="Logo" />
                </div>
                <ul className="navUl  h-100 ">
                  <li className="navLi ">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="navLi ">
                    <Link to="/Menu">Menu</Link>
                  </li>
                  <li className="navLi ">
                    <Link to="/Reservation">Reservation</Link>
                  </li>
                  <li className="navLi ">
                    <Link to="/Instagram">Instagram</Link>
                  </li>
                  <li className="navLi ">
                    <Link to="/About">About</Link>
                  </li>
                  <li className="navLi ">
                    <Link to="/Blog">Blog</Link>
                  </li>
                  <li className="navLi ">
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
                </div>
              </nav>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
