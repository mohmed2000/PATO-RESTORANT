import { useHistory } from "react-router-dom";
/* component */
import MSlider from "../../component/MSlider";
/* libraries */

/* images */

import "./style.css";

export default function Home(props) {
  const {} = props;
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };

  return (
    <div>
      <MSlider />
    </div>
  );
}
