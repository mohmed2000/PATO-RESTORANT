import React from "react";
import { useHistory } from "react-router-dom";
export default function Home() {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return (
    <div>
      <center>
        <h1>Home</h1>
      </center>
    </div>
  );
}
