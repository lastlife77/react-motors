import React, { useState, useRef } from "react";
import styles from "./CheckBox.scss";

function CheckBox(props) {
  //props isOn onClick

  return (
    <div className="checkBox">
      <div
        onClick={() => {
          props.onClick();
        }}
        className={`switch-btn ${props.isOn ? "switch-on" : undefined}`}
      ></div>
    </div>
  );
}
export default CheckBox;
