import Title from "./Title";
/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
export default function OurVideo() {
  return (
    <div>
      <div className="OurVideo">
        <div className="videoInfo">
          <Title
            secTit="Discover"
            firstTit="Our Video"
            className="text-white black-tit"
          />
          <div className="videoIconDiv">
            <i className="videoIcon">
              <FontAwesomeIcon icon={faPlay} />
            </i>
          </div>
        </div>
      </div>
    </div>
  );
}
