import React from "react";
import "./button.css";
function Button({ text, link }) {
  return (
    <div className="btn">
      <a href={link} className="btn-1 outer-shadow hover-in-shadow" >
         {text}
      </a>
    </div>
  );
}

export default Button;
