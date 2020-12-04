import React from "react";

export default function DiscoverBtn(props) {
  const { btnText } = props;
  return (
    <div>
      <button className="DiscoverBtn">{btnText}</button>
    </div>
  );
}
