import React, { useState, useEffect } from "react";
import styles from "./Header.scss";
import logo from "../../UI_Library/img/logo.svg";
import Search from "../../UI_Library/Atoms/Search/Search";
import user from "../../UI_Library/img/user.svg";
import userHover from "../../UI_Library/img/userHover.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAuth, logout } from "../../redux/slices/user";

function Header(props) {
  const dispatch = useDispatch();
  let userIsAuth = useSelector(isAuth);

  const logoutHandler = () => {
    dispatch(logout());
    window.localStorage.removeItem("token");
  };

  return (
    <div className="header__wrapper">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/">
            <img src={logo}></img>
          </Link>
        </div>
        <div className="header__search">
          <Search placeholder="Поиск автомобиля"></Search>
        </div>
        <div className="header__user">
          {userIsAuth ? (
            <button onClick={logoutHandler}>
              <p>Выход</p>
            </button>
          ) : (
            <a href="/login">
              <img className="header__user__icon" src={user}></img>

              <img className="header__user__iconHover" src={userHover}></img>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
export default Header;
