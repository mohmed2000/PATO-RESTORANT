import React from "react";

export default function Button(props) {
  const { btnText } = props;
  return (
    <div>
      <button className="Button M_SlideBtn">{btnText}</button>
    </div>
  );
}
