import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./MainPage.scss";
import AutoCard from "../../components/autoCard/AutoCard";
import Filter from "../../components/filter/Filter";
import axios from "../../axios.js";
import { fetchAutos } from "../../redux/slices/autos";
import AutoPage from "../../components/autoPage/AutoPage";
import loading from "../../UI_Library/img/loading.gif";

function Main() {
  let API_URL = process.env.REACT_APP_API_URL;

  const dispatch = useDispatch();
  const { autos } = useSelector((state) => state.autos);

  const isAutosLoading = autos.status == "loading";

  let [autoPageShow, setAutoPageShow] = useState("");

  useEffect(() => {
    dispatch(fetchAutos());
  }, []);

  let [autoParams, setAutoParams] = useState({
    carBrand: "",
    carModel: "",
    carBody: "",
    carTransmission: "",
    carEngine: "",
    carEnginePower: "",
    carEngineVolume: "",
    carDrive: "",
    year: "",
    country: "",
    price: "",
  });
  return (
    <div className="mainPage">
      <Filter
        activeItems={(value) => {
          setAutoParams(value);
          dispatch(fetchAutos(value));
        }}
      ></Filter>
      <div className="autoCards">
        {isAutosLoading ? (
          <div className="loading">
            <img src={loading}></img>
          </div>
        ) : (
          autos.items.map((auto, index) => {
            let imgs = auto.imgs.map((img) => {
              return `${API_URL}${img}`;
            });

            let chars = [
              auto.carBody,
              auto.carDrive,
              auto.carTransmission,
              auto.volume,
              auto.carEngineType,
              auto.year,
              auto.power,
            ];

            return (
              <div>
                <AutoCard
                  onClick={() => {
                    setAutoPageShow(auto.id);
                  }}
                  key={auto.id}
                  image={imgs[0]}
                  name={auto.carBrand + " " + auto.carModel}
                  price={auto.price}
                  characteristics={
                    auto.carTransmission +
                    ", " +
                    auto.carDrive +
                    ", " +
                    auto.volume +
                    "л., " +
                    auto.carEngineType +
                    ", " +
                    auto.year +
                    "г.," +
                    auto.carBody
                  }
                ></AutoCard>
                {autoPageShow == auto.id ? (
                  <AutoPage
                    key={auto.id + index}
                    onClick={() => {
                      setAutoPageShow("");
                      console.log(autoPageShow);
                    }}
                    isClose={autoPageShow == auto.id}
                    title={auto.carBrand + " " + auto.carModel}
                    images={imgs}
                    characteristics={chars}
                    price={auto.price}
                  ></AutoPage>
                ) : undefined}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default Main;
