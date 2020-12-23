import { useState } from "react";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import InstagramSideNav from "../pato images/gallery/InstgramSideNav";

export default function Navside(props) {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <div className="btn3">
        <button className="nav3-" onClick={() => handleShow()}></button>
      </div>
      <aside className={show === true ? "navsideShow Navside " : "Navside"}>
        <button
          onClick={() => handleClose()}
          className={
            show === false ? "Navside navSideCloseBtn" : "navSideCloseBtn"
          }
        >
          <i className="navSideBtn">
            <FontAwesomeIcon icon={faTimes} />
          </i>
        </button>
        <ul className="navSideUl ">
          <li className="navLi pb-1">
            <Link to="/">Home</Link>
          </li>
          <li className="navLi">
            <Link to="/Menu">Menu</Link>
          </li>
          <li className="navLi">
            <Link to="/Instagram">Instagram</Link>
          </li>
          <li className="navLi">
            <Link to="/About">About</Link>
          </li>
          <li className="navLi">
            <Link to="/Blog">Blog</Link>
          </li>
          <li className="navLi">
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
        <button className="sideBtn ">
          <Link className="sideBtn bg-transparent" to="/Reservation">
            Reservation
          </Link>
        </button>
        <h4 className="mb-5 navSideTit ">INSTAGRAM</h4>
        <div className="containerImg">
          <InstagramSideNav className="imgSideNav " />
        </div>
      </aside>
    </>
  );
}
