import React from "react";
import { useHistory } from "react-router-dom";
export default function Contact() {
  const history = useHistory();
  const goContact = () => {
    history.push("/contact");
  };
  return (
    <div>
      <center>
        <h1>Contact</h1>
      </center>
    </div>
  );
}
