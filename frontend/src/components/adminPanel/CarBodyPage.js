import React, { useState, useEffect } from "react";
import styles from "./AdminPages.scss";
import InputForm from "../../UI_Library/Atoms/input/InputForm";

function CarBodyPage(props) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="header">
          <p>Кузов</p>
        </div>
        <div className="main">
          <InputForm placeholder="Тип кузова"></InputForm>
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
export default CarBodyPage;
