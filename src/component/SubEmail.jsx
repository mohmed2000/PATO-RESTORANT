/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function SubEmail() {
  return (
    <div className="SubEmail">
      <div className="Email">
        <span className="subEmailTit">SPECIAL SIGN UP</span>
        <div className="subEmailInputDiv ">
          <input
            className="emailInput form-input-text"
            type="email"
            placeholder="Email Address"
            name="Phone"
            id="Phone"
          />
          <i className="EmailIcon">
            <FontAwesomeIcon icon={faEnvelope} />
          </i>
        </div>
        <button type="submit" className="emailbtn subBtn">
          SIGN-UP
        </button>
      </div>
    </div>
  );
}
