import React from "react";
import "./SwitchButton.css";

export default function SwitchButton({ text, onClick }) {
  return (
      <button className="SwitchButton button primary" onClick={onClick}>
        Find your nearest {text}
      </button>
  );
}
