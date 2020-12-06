/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import Button from "./Button";
export default function SubEmail() {
  return (
    <div className="SubEmail">
      <h4 className="card-tit my-2 ">SPECIAL SIGN UP</h4>
      <input
        className="form-input form-input-text mx-4"
        type="text"
        placeholder="Email Address"
        name="Phone"
        id="Phone"
      />
      <i className="EmailIcon">
        <FontAwesomeIcon icon={faEnvelope} />
      </i>
      <button type="submit" className="emailbtn ml-1">
        SIGN-UP
      </button>
    </div>
  );
}
