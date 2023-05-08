import React, { useState, useEffect } from "react";
import styles from "./AdminPages.scss";
import InputForm from "../../UI_Library/Atoms/input/InputForm.js";
import DropDown from "../../UI_Library/Atoms/DropDown/DropDown";

function AutoPage(props) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="header">
          <p>Авто</p>
        </div>
        <div className="main">
          <DropDown items={["BMW", "Mazda"]}></DropDown>
          <DropDown items={["X5", "X6"]}></DropDown>
          <DropDown items={["Седан", "Кроссовер"]}></DropDown>
          <DropDown items={["Автомат", "Механика"]}></DropDown>
          <DropDown items={["v8", "r6"]}></DropDown>
          <DropDown items={["передний", "полный"]}></DropDown>
          <InputForm placeholder="Год"></InputForm>
          <DropDown items={["Китай", "Германия"]}></DropDown>
          <InputForm placeholder="Цена"></InputForm>
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
export default AutoPage;
