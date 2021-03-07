import React from "react";
import "./effect.css";
const div = Array(28).fill("");
function Effect() {
  return (
    <div className="effect-wrap">
      <div className="effect effect-1"></div>
      <div className="effect effect-2">
        {div.map((div, i) => {
          return <div key={i}></div>;
        })}
      </div>
    </div>
  );
}

export default Effect;
