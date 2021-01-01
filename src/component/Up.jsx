import { useState, useEffect } from "react";
/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";

export default function Up() {
  const [Top, setTop] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", handleShow);
    // window.addEventListener("scroll", handelTop);
    return () => {
      window.removeEventListener("scroll", handleShow);
      // window.removeEventListener("scroll", handelTop);
    };
  }, []);
  const handleShow = () => {
    if (window.scrollY >= 600) {
      setTop(true);
    } else {
      setTop(false);
    }
  };
  function handelTop() {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <div
        className={Top === true ? "topDiv topIcon" : "topDiv"}
        onClick={handelTop}
      >
        <i className="text-white">
          <FontAwesomeIcon icon={faAngleDoubleUp} />
        </i>
      </div>
    </div>
  );
}
