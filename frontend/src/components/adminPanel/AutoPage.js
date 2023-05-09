import React, { useState, useEffect, useRef } from "react";
import styles from "./AdminPages.scss";
import InputForm from "../../UI_Library/Atoms/input/InputForm.js";
import DropDown from "../../UI_Library/Atoms/DropDown/DropDown";

function AutoPage(props) {
  let inputFileRef = useRef(null);
  let handleChangeFile = (event) => {
    let images = event.target.files;
  };

  let [brand, setBrand] = useState("");
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="header">
          <p>Авто</p>
        </div>
        <div className="main">
          <DropDown
            items={["", , "BMW", "Mazda"]}
            activeItem={(activeItem) => {
              setBrand(activeItem);
            }}
          ></DropDown>
          <div className={`models ${brand == "" ? "inactive" : undefined}`}>
            <DropDown
              noActive={brand == "" ? true : false}
              items={["X5", "X6"]}
            ></DropDown>
          </div>
          <DropDown items={["Седан", "Кроссовер"]}></DropDown>
          <DropDown items={["Автомат", "Механика"]}></DropDown>
          <DropDown items={["v8", "r6"]}></DropDown>
          <DropDown items={["передний", "полный"]}></DropDown>
          <InputForm placeholder="Год"></InputForm>
          <DropDown items={["Китай", "Германия"]}></DropDown>
          <InputForm placeholder="Цена"></InputForm>
          <button
            className="image"
            onClick={() => {
              inputFileRef.current.click();
            }}
          >
            <p>Добавть изображия</p>
          </button>
          <input
            ref={inputFileRef}
            type="file"
            onChange={handleChangeFile}
            hidden
            multiple
          ></input>
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
