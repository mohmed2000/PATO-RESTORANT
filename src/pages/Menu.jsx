import React from "react";
import { useHistory } from "react-router-dom";
export default function Menu() {
  const history = useHistory();
  const goMenu = () => {
    history.push("/Menu");
  };
  return (
    <div>
      <center>
        <h1>Menu</h1>
      </center>
    </div>
  );
}
