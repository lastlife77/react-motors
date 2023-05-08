import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./AdminPanel.scss";
import InputForm from "../../UI_Library/Atoms/input/InputForm.js";
import DropDown from "../../UI_Library/Atoms/DropDown/DropDown";

function AutoPage(props) {
  return (
    <div className="panel-wrapper">
      <div className="panel-content">
        <div className="main">
          <Link to="/auto">
            <button>
              <p>Авто</p>
            </button>
          </Link>
          <Link to="/carBrand">
            <button>
              <p>Марка</p>
            </button>
          </Link>
          <Link to="/carModel">
            <button>
              <p>Модель</p>
            </button>
          </Link>
          <Link to="/carBody">
            <button>
              <p>Кузов</p>
            </button>
          </Link>
          <Link to="/carDrive">
            <button>
              <p>Привод</p>
            </button>
          </Link>
          <Link to="/carEngine">
            <button>
              <p>Двигатель</p>
            </button>
          </Link>
          <Link to="/carEngineType">
            <button>
              <p>Тип двигателя</p>
            </button>
          </Link>
          <Link to="/carTransmission">
            <button>
              <p>КПП</p>
            </button>
          </Link>
          <Link to="/country">
            <button>
              <p>Страна</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AutoPage;
