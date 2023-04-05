import React, { useState } from "react";
import styles from "./DropDown.scss";
import down from "./../../img/dropdown_down.svg";
import check from "./../../img/check.svg";
import close from "./../../img/close.svg";
function DropDownMany(props) {
  //props activeItem items[] (where items[0] = title) noActive
  let items = props.items;
  let [isActive, setIsActive] = useState(false);
  let [activeItems, setActiveItems] = useState([items[0]]);

  let dropItems = items.map((item, index) => (
    <button
      key={index}
      onClick={() => {
        if (activeItems.includes(item)) {
          let arr = activeItems.filter((el) => el != item);

          if (arr.length != 0) {
            setActiveItems(arr);
          } else {
            setActiveItems([items[0]]);
          }
        } else {
          if (activeItems[0] == items[0] || item == items[0]) {
            setActiveItems([item]);
          } else {
            setActiveItems([...activeItems, item]);
          }
        }

        if (props.activeItem) {
          props.activeItem(item);
        }
        setIsActive(false);
      }}
      className={`drop_item ${
        activeItems.includes(item) ? "drop_item-active" : undefined
      }`}
    >
      <p>{item}</p>
      {activeItems.includes(item) ? <img src={check}></img> : undefined}
    </button>
  ));

  return (
    <div className="dropDown">
      <button
        className={`drop_btn ${
          activeItems != items[0] ? "drop_btn_active" : undefined
        }`}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <p>
          {activeItems.map((item, index) => (index == 0 ? item : `, ${item}`))}
        </p>
        {activeItems[0] == items[0] ? (
          <img className="up-down_img" src={down}></img>
        ) : (
          <img
            onClick={(e) => {
              setActiveItems([items[0]]);
              setIsActive(false);
              e.stopPropagation();
            }}
            className="close_img"
            src={close}
          ></img>
        )}
      </button>
      {!props.noActive && isActive ? (
        <div tabIndex="1" className="drop">
          {dropItems}
        </div>
      ) : undefined}
    </div>
  );
}
export default DropDownMany;
