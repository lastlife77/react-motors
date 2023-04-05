import React, { useState } from "react";
import styles from "./DropDown.scss";
import down from "./../../img/dropdown_down.svg";
import up from "./../../img/dropdown_up.svg";
function DropDown(props) {
  //props activeItem items[] (where items[0] = title) noActive
  let items = props.items;

  let [isActive, setIsActive] = useState(false);
  let [activeItem, setActiveItem] = useState(items[0]);

  let dropItems = items.map((item, index) => (
    <button
      key={index}
      onClick={() => {
        setActiveItem(item);
        if (props.activeItem) {
          props.activeItem(item);
        }
        setIsActive(false);
      }}
      className={`drop_item ${
        activeItem == item ? "drop_item-active" : undefined
      }`}
    >
      <p>{item}</p>
    </button>
  ));

  return (
    <div className="dropDown">
      <button
        className={`drop_btn ${
          activeItem != items[0] ? "drop_btn_active" : undefined
        }`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <p>{activeItem}</p>
        <img className="up-down_img" src={isActive ? up : down}></img>
      </button>
      {!props.noActive && isActive ? (
        <div className="drop">{dropItems}</div>
      ) : undefined}
    </div>
  );
}
export default DropDown;
