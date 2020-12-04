import React from "react";

export default function Button(props) {
  const { btnText, className } = props;
  return (
    <div>
      <button className={className}>{btnText}</button>
    </div>
  );
}
