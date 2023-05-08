import React, { useState, useEffect } from "react";
import styles from "./AdminPages.scss";
import InputForm from "../../UI_Library/Atoms/input/InputForm.js";

function CarTransmissionPage(props) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="header">
          <p>КПП</p>
        </div>
        <div className="main">
          <InputForm placeholder="Тип КПП"></InputForm>
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
export default CarTransmissionPage;
