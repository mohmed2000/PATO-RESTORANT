import React from "react";

export default function Item(props) {
  const { itemp, itemSpan } = props;
  return (
    <div>
      <div className="item pt-2 pb-5">
        <div className="itemp">{itemp}</div>
        <span className="itemSpan">{itemSpan}</span>
      </div>
    </div>
  );
}
