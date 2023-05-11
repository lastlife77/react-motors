import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckBox from "../../UI_Library/Atoms/CheckBox/CheckBox.js";
import DropDown from "../../UI_Library/Atoms/DropDown/DropDown.js";
import DropDownMany from "../../UI_Library/Atoms/DropDown/DropDownMany.js";
import SliderFilter from "../../UI_Library/Atoms/SliderFilter/SliderFilter.js";
import loading from "../../UI_Library/img/loading.gif";
import styles from "./Filter.scss";
import { fetchCarBrands } from "../../redux/slices/carBrands.js";
import { fetchCarModels } from "../../redux/slices/carModels.js";
import { fetchCarBodys } from "../../redux/slices/carBodys.js";
import { fetchCarTransmissions } from "../../redux/slices/carTransmissions.js";
import { fetchCarEngines } from "../../redux/slices/carEngines.js";
import { fetchCarDrives } from "../../redux/slices/carDrives.js";
import { fetchCountries } from "../../redux/slices/countries.js";
import { fetchYearsAndPrices } from "../../redux/slices/yearsAndPrices.js";
import { fetchAutos } from "../../redux/slices/autos.js";

function Filter(props) {
  const dispatch = useDispatch();
  //carBrands
  const { carBrands: carBrandsData } = useSelector((state) => state.carBrands);
  const isCarBrandsLoaded = carBrandsData.status == "loaded";
  const carBrands = carBrandsData.items;
  //carModels
  const { carModels: carModelsData } = useSelector((state) => state.carModels);
  const isCarModelsLoaded = carModelsData.status == "loaded";
  const carModels = carModelsData.items;
  //carBodys
  const { carBodys: carBodysData } = useSelector((state) => state.carBodys);
  const isCarBodysLoaded = carBodysData.status == "loaded";
  const carBodys = carBodysData.items;
  //carTransmissions
  const { carTransmissions: carTransmissionsData } = useSelector(
    (state) => state.carTransmissions
  );
  const isCarTransmissionsLoaded = carTransmissionsData.status == "loaded";
  const carTransmissions = carTransmissionsData.items;
  //carEngines
  const { carEngines: carEnginesData } = useSelector(
    (state) => state.carEngines
  );
  const isCarEnginesLoaded = carEnginesData.status == "loaded";
  const carEngines = carEnginesData.items[0];
  const powers = carEnginesData.items[1];
  const volumes = carEnginesData.items[2];

  //carDrives
  const { carDrives: carDrivesData } = useSelector((state) => state.carDrives);
  const isCarDrivesLoaded = carDrivesData.status == "loaded";
  const carDrives = carDrivesData.items;
  //countries
  const { countries: countriesData } = useSelector((state) => state.countries);
  const isCountriesLoaded = countriesData.status == "loaded";
  const countries = countriesData.items;
  //yearsAndPrices
  const { yearsAndPrices: yearsAndPricesData } = useSelector(
    (state) => state.yearsAndPrices
  );
  const isYearsAndPricesLoaded = yearsAndPricesData.status == "loaded";
  const years = yearsAndPricesData.items[0];
  const prices = yearsAndPricesData.items[1];
  useEffect(() => {
    dispatch(fetchCarBrands());
    dispatch(fetchCarModels());
    dispatch(fetchCarBodys());
    dispatch(fetchCarTransmissions());
    dispatch(fetchCarEngines());
    dispatch(fetchCarDrives());
    dispatch(fetchCountries());
    dispatch(fetchYearsAndPrices());
  }, []);

  let getFiltredAutos = async (
    carBrand,
    carModel,
    carBody,
    carTransmission,
    carEngine,
    carDrive,
    country,
    year,
    price,
    power,
    volume
  ) => {
    if (carBrand == "Все марки") {
      carBrand = "";
      carModel = "";
    }
    if (carModel == "Все модели") {
      carModel = "";
    } else {
      carBrand = "";
    }
    if (carBody == "Кузов") {
      carBody = "";
    }
    if (carTransmission == "КПП") {
      carTransmission = "";
    }
    if (carEngine == "Двигатель") {
      carEngine = "";
    }
    if (carDrive == "Привод") {
      carDrive = "";
    }
    if (country == "Страны") {
      country = "";
    }
    if (year == "Год выпуска") {
      year = "";
    }
    let values = {
      carBrand: carBrand,
      carModel: carModel,
      carBody: carBody,
      carTransmission: carTransmission,
      carEngine: carEngine,
      carEnginePower: power,
      carEngineVolume: volume,
      carDrive: carDrive,
      year: year,
      country: country,
      price: price,
    };
    console.log(values, year);
    props.activeItems(values);
  };

  let PTSOwners = ["Владельцы по ПТС", 1, 2, 3, 4, 5, 6, 7];
  let PTS = ["ПТС", "Оригинал", "Дубликат"];
  let carAccidents = ["ДТП", "Без ДТП", "Участвовавшие в ДТП"];

  let [expertSearchIsOn, setExpertSearchIsOn] = useState(false);
  let [isNewAuto, setIsNewAuto] = useState(true);

  let [carBrand, setCarBrand] = useState("");
  let [carModel, setCarModel] = useState("");
  let [carBody, setCarBody] = useState("");
  let [carTransmission, setCarTransmission] = useState("");
  let [carEngine, setCarEngine] = useState("");
  let [carDrive, setCarDrive] = useState("");
  let [country, setCountry] = useState("");
  let [year, setYear] = useState("");
  let [price, setPrice] = useState("");
  let [power, setPower] = useState("");
  let [volume, setVolume] = useState("");

  //reset
  let [reset, setReset] = useState("false");

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
        {isCarBrandsLoaded &&
        isCarModelsLoaded &&
        isCarBodysLoaded &&
        isCarTransmissionsLoaded &&
        isCarEnginesLoaded &&
        isCarDrivesLoaded &&
        isCountriesLoaded &&
        isYearsAndPricesLoaded ? (
          <div className="main">
            <div className="default">
              <DropDown
                activeItem={(activeItem) => {
                  setCarBrand(activeItem);
                }}
                items={carBrands}
              ></DropDown>
              <div
                className={`models ${
                  carBrand == carBrands[0] ? "inactive" : undefined
                }`}
              >
                <DropDownMany
                  activeItem={(activeItem) => {
                    setCarModel(activeItem);
                  }}
                  noActive={carBrand == carBrands[0] ? true : false}
                  items={carModels
                    .filter((item) => {
                      if (item[0] == carBrand || item[0] == "Все марки") {
                        return item;
                      }
                    })
                    .map((item) => {
                      return item[1];
                    })}
                ></DropDownMany>
              </div>
              <DropDownMany
                activeItem={(activeItem) => {
                  setCarBody(activeItem);
                }}
                items={carBodys}
              ></DropDownMany>
              <DropDownMany
                activeItem={(activeItem) => {
                  setCarTransmission(activeItem);
                }}
                items={carTransmissions}
              ></DropDownMany>
            </div>
            <div
              className={`${
                !expertSearchIsOn ? "extended-hidden" : "extended"
              }`}
            >
              <DropDownMany
                activeItem={(activeItem) => {
                  setCarEngine(activeItem);
                }}
                items={carEngines}
              ></DropDownMany>
              <DropDownMany
                activeItem={(activeItem) => {
                  setCarDrive(activeItem);
                }}
                items={carDrives}
              ></DropDownMany>
              <DropDownMany
                activeItem={(activeItem) => {
                  setYear(activeItem);
                }}
                items={years}
              ></DropDownMany>
              <DropDownMany
                activeItem={(activeItem) => {
                  setCountry(activeItem);
                }}
                items={countries}
              ></DropDownMany>
              {!isNewAuto ? (
                <DropDownMany items={PTSOwners}></DropDownMany>
              ) : undefined}
              {!isNewAuto ? (
                <DropDownMany items={PTS}></DropDownMany>
              ) : undefined}
              {!isNewAuto ? (
                <DropDownMany items={carAccidents}></DropDownMany>
              ) : undefined}
              <SliderFilter
                activeItem={(activeItem) => {
                  setPrice(activeItem);
                }}
                title="Цена, руб"
                min={prices[0]}
                max={prices[1]}
                step={10000}
              ></SliderFilter>
              <SliderFilter
                activeItem={(activeItem) => {
                  setVolume(activeItem);
                }}
                title="Объем двигателя, л"
                min={volumes[0]}
                max={volumes[1]}
                step={0.1}
              ></SliderFilter>
              <SliderFilter
                activeItem={(activeItem) => {
                  setPower(activeItem);
                }}
                title="Мощность двигателя, л.с"
                min={powers[0]}
                max={powers[1]}
                step={1}
              ></SliderFilter>
            </div>
          </div>
        ) : (
          <div className="loading">
            <img src={loading}></img>
          </div>
        )}
        <div className="footer">
          <div
            className="footer_block reset"
            onClick={() => {
              dispatch(fetchCarBodys());
              setCarBrand("");
              setCarModel("");
              setCarBody("");
              setCarTransmission("");
              setCarEngine("");
              setCarDrive("");
              setCountry("");
              setYear("");
              setPrice("");
              setPower("");
              setVolume("");
            }}
          >
            <p>Сбросить все параметры фильтра</p>
          </div>
          <div className="footer_block show">
            <button
              onClick={() => {
                getFiltredAutos(
                  carBrand,
                  carModel,
                  carBody,
                  carTransmission,
                  carEngine,
                  carDrive,
                  country,
                  year,
                  price,
                  power,
                  volume
                );
              }}
            >
              <p>ПОКАЗАТЬ 2082 АВТО</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filter;
