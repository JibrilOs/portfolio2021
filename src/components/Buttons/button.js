import React from "react";
import "./button.css";

// const btn1 = {
//   padding: "10px 25px",
//   fontSize: "16px",
//   fontWeight: 500,
//   color: "var(--skin-color1)",
//   backgroundColor: "transparent",
//   lineHeight: 1.5,
//   borderRadius: "30px",
//   transition: "all 0.3s ease",
//   display: "inline-block",
// };

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
