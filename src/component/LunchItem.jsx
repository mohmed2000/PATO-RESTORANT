import React from "react";

export default function LunchItem(props) {
  const { imgLunch, h3, span, p } = props;
  return (
    <div>
      <div className="LunchItem mb-4 ">
        <div className="imgItemdev">
          <img className="imgItem" src={imgLunch} alt="imgLunch" />
        </div>
        <div className="lunchContent">
          <h3 className="itemp">{h3}</h3>
          <span className="itemSpan mt-0">{span}</span>
          <p className="lunchP mt-3">{p}</p>
        </div>
      </div>
    </div>
  );
}
