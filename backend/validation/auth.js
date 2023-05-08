import { body } from "express-validator";

export const registerValidation = [
  body("email", "невеный формат почты").isEmail(),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
];

export const loginValidation = [
  body("email", "невеный формат почты").isEmail(),
  body("fullName", "Укажите имя").isLength({ min: 3 }),
  body("password", "Пароль должен быть минимум 5 символов").isLength({
    min: 5,
  }),
];
