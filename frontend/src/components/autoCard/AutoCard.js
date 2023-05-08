import React from "react";
import styles from "./AutoCard.scss";
import Image from "../../UI_Library/Atoms/Image/Image";
import Button from "../../UI_Library/Atoms/Buttons/Button";

function AutoCard({ image, name, price, characteristics, onClick }) {
  return (
    <div onClick={onClick} className="card card-container">
      <Image className="el" src={image}></Image>
      <p className="medium">{name}</p>
      <p className="medium">{`${price} ₽`}</p>
      <p className="regular">{characteristics}</p>
      <button className="btn">
        <p className="btnText regular">В корзину</p>
      </button>
    </div>
  );
}
export default AutoCard;
