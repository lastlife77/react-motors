import React, { useState } from "react";
import styles from "./Slider.scss";
import prev from "./../../img/arrow_left.svg";
import next from "./../../img/arrow_right.svg";

function Slider(props) {
  // props: items = []
  let images = props.items;
  let imgCount = props.items.length;
  let [activeImg, setActiveImg] = useState(0);
  let [sliderDirection, setSliderDirection] = useState("next");

  return (
    <div className="slider">
      <div className="slider_main-block">
        <div onClick={setPrevActiveImg} className="slider_prev">
          <img className="arrow_img" src={prev}></img>
        </div>
        {images.map((img, index) => {
          return (
            <img
              key={index}
              className={
                index != activeImg
                  ? "hidden_img"
                  : sliderDirection == "next"
                  ? "nextImg"
                  : "prevImg"
              }
              src={img}
            ></img>
          );
        })}
        <div onClick={setNextActiveImg} className="slider_next">
          <img className="arrow_img" src={next}></img>
        </div>
      </div>
      <div className="slider_under-block">
        {images.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() => {
                setActiveImgByIndex(index);
              }}
              className={
                index == activeImg
                  ? "under-block_item_active"
                  : "under-block_item"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );

  function nextActiveImg(value) {
    if (value < imgCount - 1) {
      return value + 1;
    } else {
      return 0;
    }
  }

  function setNextActiveImg() {
    setActiveImg(nextActiveImg(activeImg));
    setSliderDirection("next");
  }

  function prevActiveImg(value) {
    if (value > 0) {
      return value - 1;
    } else {
      return imgCount - 1;
    }
  }

  function setPrevActiveImg() {
    setActiveImg(prevActiveImg(activeImg));
    setSliderDirection("prev");
  }

  function setActiveImgByIndex(index) {
    setActiveImg(index);
  }
}
export default Slider;
