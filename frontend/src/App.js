import "./App.scss";
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import MainPage from "./pages/MainPage/MainPage";
import Header from "./components/header/Header";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import AdminAutoPage from "./pages/AdminPages/AdminAutoPage/AdminAutoPage";
import AdminCarBodyPage from "./pages/AdminPages/AdminCarBodyPage/AdminCarBodyPage";
import AdminCarBrandPage from "./pages/AdminPages/AdminCarBrandPage/AdminCarBrandPage";
import AdminCarDrivePage from "./pages/AdminPages/AdminCarDrivePage/AdminCarDrivePage";
import AdminCarEnginePage from "./pages/AdminPages/AdminCarEnginePage/AdminCarEnginePage";
import AdminCarEngineTypePage from "./pages/AdminPages/AdminCarEngineTypePage/AdminCarEngineTypePage";
import AdminCarModelPage from "./pages/AdminPages/AdminCarModelPage/AdminCarModelPage";
import AdminCarTransmissionPage from "./pages/AdminPages/AdminCarTransmissionPage/AdminCarTransmissionPage";
import AdminCountryPage from "./pages/AdminPages/AdminCountryPage/AdminCountryPage";

import { useDispatch, useSelector } from "react-redux";
import { fetchAuthMe, isAuth } from "./redux/slices/user";

function App() {
  const dispatch = useDispatch();
  let userIsAuth = useSelector(isAuth);

  useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/auto" element={<AdminAutoPage />} />
        <Route path="/carBody" element={<AdminCarBodyPage />} />
        <Route path="/carBrand" element={<AdminCarBrandPage />} />
        <Route path="/carDrive" element={<AdminCarDrivePage />} />
        <Route path="/carEngine" element={<AdminCarEnginePage />} />
        <Route path="/carEngineType" element={<AdminCarEngineTypePage />} />
        <Route path="/carModel" element={<AdminCarModelPage />} />
        <Route path="/carTransmission" element={<AdminCarTransmissionPage />} />
        <Route path="/country" element={<AdminCountryPage />} />
      </Routes>
    </div>
  );
}

export default App;
