import "./Register.scss";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import InputForm from "../../UI_Library/Atoms/input/InputForm";
import { fetchLogin, fetchRegister } from "../../redux/slices/user";

function Register(props) {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const authStatus = user.status;
  const onSubmit = async (email, name, password) => {
    let values = {
      email: email,
      fullName: name,
      role: "user",
      password: password,
    };
    const data = await dispatch(fetchRegister(values));
    if (data.payload && "token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  if (authStatus == "success") {
    return <Navigate to="/" />;
  }
  return (
    <div className="register-wrapper">
      <div className="register-content">
        <div className="register-content__header">
          <p>Вход</p>
        </div>
        <div className="register-content__main">
          <div className="helperText">
            <p>
              {authStatus == "error" ? "Неверно указаны данные" : undefined}
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
              setName(value);
            }}
            placeholder="имя"
          ></InputForm>
          <InputForm
            getInputValue={(value) => {
              setPassword(value);
            }}
            placeholder="пароль"
          ></InputForm>
        </div>
        <div className="register-content__footer">
          <button
            onClick={() => {
              onSubmit(email, name, password);
            }}
          >
            <p>Регистрация</p>
          </button>
          <Link to="/login">
            <button>
              <p>Вход</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Register;
