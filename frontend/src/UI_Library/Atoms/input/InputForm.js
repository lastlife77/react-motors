import React, { useState } from "react";
import styles from "./InputForm.scss";

function InputForm(props) {
  //props placeholder

  return (
    <div className="inputForm">
      <div className="inputForm__input">
        <input
          placeholder={props.placeholder}
          onChange={(e) => {
            props.getInputValue(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}
export default InputForm;
