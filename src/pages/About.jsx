import React from "react";
import { useHistory } from "react-router-dom";
export default function About() {
  const history = useHistory();
  const goAbout = () => {
    history.push("/About");
  };
  return (
    <div>
      <center>
        <h1>About</h1>
      </center>
    </div>
  );
}
