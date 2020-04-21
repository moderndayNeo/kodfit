import React from "react";
import "./SwitchButton.css";

export default function SwitchButton({ text, onClick }) {
  return (
      <button className="SwitchButton" onClick={onClick}>
        Find your nearest {text}
      </button>
  );
}
