import React, { useState, useEffect } from "react";
import styles from "./AdminPages.scss";
import InputForm from "../../UI_Library/Atoms/input/InputForm.js";
import DropDown from "../../UI_Library/Atoms/DropDown/DropDown";

function CarEngineTypePage(props) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="header">
          <p>Тип двигателя</p>
        </div>
        <div className="main">
          <InputForm placeholder="Тип двигателя"></InputForm>
        </div>
        <div className="footer">
          <button>
            <p>Создать</p>
          </button>
        </div>
      </div>
    </div>
  );
}
export default CarEngineTypePage;
