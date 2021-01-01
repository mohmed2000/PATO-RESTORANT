import React from "react";
export default function AboutImg(props) {
  const { src } = props;
  return (
    <div className="AboutImg">
      <img className="HalfImg" src={src} alt="HalfImg" />
    </div>
  );
}
