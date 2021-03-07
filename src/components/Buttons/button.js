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

function Button() {
  return (
    <div className="btn">
      <a href="/" className="btn-1 outer-shadow hover-in-shadow">
        More About Me
      </a>
    </div>
  );
}

export default Button;
