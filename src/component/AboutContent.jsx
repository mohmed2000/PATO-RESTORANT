import { Link } from "react-router-dom";
/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";

/* component */
export default function AboutContent(props) {
  return (
    <div className="AboutContent wow slideInLeft">
      <p className="About-p">
        Donec quis lorem nulla. Nunc eu odio mi. Morbi nec lobortis est. Sed
        fringilla, nunc sed imperdiet lacinia, nisl ante egestas mi, ac
        facilisis ligula sem id neque
      </p>
      <Link to="/About" className="Go-about">
        OUR STORY &nbsp;
        <span>
          <FontAwesomeIcon icon={faLongArrowAltRight} />
        </span>
      </Link>
      <div></div>
    </div>
  );
}
