import React, { useState, useEffect } from "react";
import CheckBox from "../../UI_Library/Atoms/CheckBox/CheckBox.js";
import DropDown from "../../UI_Library/Atoms/DropDown/DropDown.js";
import DropDownMany from "../../UI_Library/Atoms/DropDown/DropDownMany.js";
import SliderFilter from "../../UI_Library/Atoms/SliderFilter/SliderFilter.js";
import styles from "./Filter.scss";

function Filter(props) {
  let brands = ["Все марки", "Audi", "BMW", "Lada"];
  let models = [
    "Все модели",
    "x5",
    "x6",
    "x7",
    "asdsdsdsdsdx5",
    "xadsssss6",
    "xdassssssss7",
  ];
  let carBody = ["Кузов", "седан", "внедорожник", "кроссовер", "купе"];
  let transmission = ["КППП", "Автомат", "Механика"];
  let engines = ["Двигатель", "v8", "v6"];
  let drives = ["Привод", "Полный", "Задний"];
  let years = ["Год выпуска", "2002", "2003"];
  let countries = ["Страна", "Германия", "Россия"];

  let PTSOwners = ["Владельцы по ПТС", 1, 2, 3, 4, 5, 6, 7];
  let PTS = ["ПТС", "Оригинал", "Дубликат"];
  let carAccidents = ["ДТП", "Без ДТП", "Участвовавшие в ДТП"];

  let [expertSearchIsOn, setExpertSearchIsOn] = useState(false);
  let [isNewAuto, setIsNewAuto] = useState(true);
  let [brand, setBrand] = useState(brands[0]);
  return (
    <div className="filter-wrapper">
      <div className="filter-content">
        <div className="header">
          <div className="new-old">
            <div
              onClick={() => {
                setIsNewAuto(true);
              }}
              className={`block ${isNewAuto ? "active" : undefined}`}
            >
              <p>Новые авто</p>
            </div>
            <div
              onClick={() => {
                setIsNewAuto(false);
              }}
              className={`block ${!isNewAuto ? "active" : undefined}`}
            >
              <p>С пробегом</p>
            </div>
          </div>
          <div className="express-expert">
            <p>Экспресс поиск</p>
            <CheckBox
              isOn={expertSearchIsOn}
              onClick={() => {
                setExpertSearchIsOn(!expertSearchIsOn);
              }}
            ></CheckBox>
            <p>Эксперт поиск</p>
          </div>
        </div>
        <div className="main">
          <div className="default">
            <DropDown
              activeItem={(activeItem) => {
                setBrand(activeItem);
              }}
              items={brands}
            ></DropDown>
            <div
              className={`models ${
                brand == brands[0] ? "inactive" : undefined
              }`}
            >
              <DropDownMany
                noActive={brand == brands[0] ? true : false}
                items={models}
              ></DropDownMany>
            </div>
            <DropDownMany items={carBody}></DropDownMany>
            <DropDownMany items={transmission}></DropDownMany>
          </div>
          <div
            className={`${!expertSearchIsOn ? "extended-hidden" : "extended"}`}
          >
            <DropDownMany items={engines}></DropDownMany>
            <DropDownMany items={drives}></DropDownMany>
            <DropDownMany items={years}></DropDownMany>
            <DropDownMany items={countries}></DropDownMany>
            {!isNewAuto ? (
              <DropDownMany items={PTSOwners}></DropDownMany>
            ) : undefined}
            {!isNewAuto ? <DropDownMany items={PTS}></DropDownMany> : undefined}
            {!isNewAuto ? (
              <DropDownMany items={carAccidents}></DropDownMany>
            ) : undefined}
            <SliderFilter
              title="Цена, руб"
              min={737500}
              max={24900000}
              step={10000}
            ></SliderFilter>
            <SliderFilter
              title="Объем двигателя, л"
              min={0.0}
              max={4.5}
              step={0.1}
            ></SliderFilter>
            <SliderFilter
              title="Мощность двигателя, л.с"
              min={33}
              max={625}
              step={1}
            ></SliderFilter>
          </div>
        </div>
        <div className="footer">
          <div className="footer_block reset">
            <p>Сбросить все параметры фильтра</p>
          </div>
          <div className="footer_block show">
            <button>
              <p>ПОКАЗАТЬ 2082 АВТО</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
