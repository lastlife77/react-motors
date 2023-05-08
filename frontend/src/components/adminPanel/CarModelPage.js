import React, { useState, useEffect } from "react";
import styles from "./AdminPages.scss";
import InputForm from "../../UI_Library/Atoms/input/InputForm.js";
import DropDown from "../../UI_Library/Atoms/DropDown/DropDown";

function CarModelPage(props) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="header">
          <p>Модель</p>
        </div>
        <div className="main">
          <DropDown items={["BMW", "Mazda"]}></DropDown>
          <InputForm placeholder="Тип трансмиссии"></InputForm>
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
export default CarModelPage;
