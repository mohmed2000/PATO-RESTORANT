/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function SlideCard(props) {
  const { src } = props;
  return (
    <>
      <div className="ReviewCard">
        <div className="ReviewDivImg">
          <img className="ReviewImg" src={src} alt="ReviewImg" />
        </div>
        <div className="Review-div-p">
          <p className="Review-p">
            “ We are lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aenean tellus sem, mattis in pre-tium nec, fermentum viverra dui ”
          </p>
        </div>
        <div className="Review-stars mb-3">
          <i className="fa ">
            <FontAwesomeIcon icon={faStar} />
          </i>
          <i className="fa ">
            <FontAwesomeIcon icon={faStar} />
          </i>
          <i className="fa ">
            <FontAwesomeIcon icon={faStar} />
          </i>
          <i className="fa ">
            <FontAwesomeIcon icon={faStar} />
          </i>
          <i className="fa ">
            <FontAwesomeIcon icon={faStar} />
          </i>
        </div>
        <div className="Review-sign">Marie Simmons ˗ New York</div>
      </div>
    </>
  );
}
