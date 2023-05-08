import "./Login.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import InputForm from "../../UI_Library/Atoms/input/InputForm";
import { fetchLogin } from "../../redux/slices/user";

function Login(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const authStatus = user.status;
  const onSubmit = async (email, password) => {
    let values = {
      email: email,
      password: password,
    };
    const data = await dispatch(fetchLogin(values));
    if (data.payload && "token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  if (authStatus == "success") {
    return <Navigate to="/" />;
  }
  return (
    <div className="login-wrapper">
      <div className="login-content">
        <div className="login-content__header">
          <p>Вход</p>
        </div>

        <div className="login-content__main">
          <div className="helperText">
            <p>
              {authStatus == "error" ? "Неверный логин или пароль" : undefined}
            </p>
          </div>
          <InputForm
            getInputValue={(value) => {
              setEmail(value);
            }}
            placeholder="email"
          ></InputForm>
          <InputForm
            getInputValue={(value) => {
              setPassword(value);
            }}
            placeholder="пароль"
          ></InputForm>
        </div>
        <div className="login-content__footer">
          <button
            onClick={() => {
              onSubmit(email, password);
            }}
          >
            <p>Войти</p>
          </button>
          <Link to="/register">
            <button>
              <p>Регистрация</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Login;
