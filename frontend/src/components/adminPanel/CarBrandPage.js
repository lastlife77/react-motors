import React, { useState, useEffect } from "react";
import styles from "./AdminPages.scss";
import InputForm from "../../UI_Library/Atoms/input/InputForm";

function CarBrandPage(props) {
  return (
    <div className="page-wrapper">
      <div className="page-content">
        <div className="header">
          <p>Марка</p>
        </div>
        <div className="main">
          <InputForm placeholder="Название марки"></InputForm>
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
export default CarBrandPage;
