import React from "react";
import "./SwitchButton.css";

export default function SwitchButton({ text, onClick }) {
  return (
      <button className="button primary rounded-capsule" onClick={onClick}>
        Find your nearest {text}
      </button>
  );
}
