import React from "react";
import { useState } from "react";

const Button = ({ title, color, btnToggle }) => {
  return (
    <>
      <button
        className="btn"
        style={{ backgroundColor: color }}
        onClick={btnToggle}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
