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
          <a
            href="https://youtu.be/5k1hSu2gdKE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="videoIconDiv">
              <i className="videoIcon">
                <FontAwesomeIcon icon={faPlay} />
              </i>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
