/* libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
/* component */
import { Link } from "react-router-dom";
export default function DiscoverCard(props) {
  const { className, src, cardTit, cardP, to, linkCard } = props;
  return (
    <div>
      <div className={className}>
        <div className="card-img">
          <img className="img-fluid HalfImg " src={src} alt="Card1" />
          <button className="blogbtn">21 Dec 2020</button>
        </div>
        <h4 className="card-tit my-4">{cardTit}</h4>
        <p className="card-p">{cardP}</p>
        <Link to={to} className="Go-about link-card">
          {linkCard} &nbsp;
          <span>
            <FontAwesomeIcon icon={faLongArrowAltRight} />
          </span>
        </Link>
      </div>
    </div>
  );
}
