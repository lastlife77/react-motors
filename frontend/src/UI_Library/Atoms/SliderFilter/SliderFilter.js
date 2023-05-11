import React, { useState, useRef } from "react";
import styles from "./SliderFilter.scss";

function SliderFilter(props) {
  //props title min max step

  let [isDefault, setIsDefault] = useState(true);

  let minInput = useRef();
  let maxInput = useRef();
  let minSlider = useRef();
  let maxSlider = useRef();
  let chekingMinMax = (value) => {
    if (+value > +props.max) {
      value = props.max;
    }
    if (+value < +props.min) {
      value = props.min;
    }
    return value;
  };

  let handlerChangeInputMinMax = () => {
    minInput.current.value = chekingMinMax(minInput.current.value);
    maxInput.current.value = chekingMinMax(maxInput.current.value);
    if (+minInput.current.value > +maxInput.current.value) {
      maxInput.current.value = minInput.current.value;
    }
    minSlider.current.value = minInput.current.value;
    maxSlider.current.value = maxInput.current.value;
    if (props.activeItem) {
      props.activeItem(`${minSlider.current.value}-${maxSlider.current.value}`);
    }
  };

  let handlerChangeSliderMinMax = () => {
    minSlider.current.value = chekingMinMax(minSlider.current.value);
    maxSlider.current.value = chekingMinMax(maxSlider.current.value);
    if (+minSlider.current.value > +maxSlider.current.value) {
      maxSlider.current.value = minSlider.current.value;
    }
    minInput.current.value = minSlider.current.value;
    maxInput.current.value = maxSlider.current.value;
    if (props.activeItem) {
      props.activeItem(`${minSlider.current.value}-${maxSlider.current.value}`);
    }
  };

  return (
    <div className="sliderFilter">
      <button className="sliderFilter_btn">
        <div className="title">
          <p>{props.title}</p>
        </div>
        <div className="min_max">
          <div className="min">
            <p>от</p>
            <input
              onFocus={() => {
                setIsDefault(false);
              }}
              value={isDefault ? props.min : undefined}
              ref={minInput}
              onBlur={() => {
                handlerChangeInputMinMax();
              }}
              onChange={() => {}}
              min={props.min}
              max={props.max}
            ></input>
          </div>
          <div className="max">
            <p>до</p>
            <input
              onFocus={() => {
                setIsDefault(false);
              }}
              value={isDefault ? props.max : undefined}
              ref={maxInput}
              onBlur={() => {
                handlerChangeInputMinMax();
              }}
              onChange={() => {}}
              min={props.min}
              max={props.max}
            ></input>
          </div>
        </div>
        <div className="slider">
          <input
            onFocus={() => {
              setIsDefault(false);
            }}
            value={isDefault ? props.min : undefined}
            onChange={() => {
              handlerChangeSliderMinMax();
            }}
            ref={minSlider}
            type="range"
            min={props.min}
            max={props.max}
            step={props.step}
          ></input>
          <input
            onFocus={() => {
              setIsDefault(false);
            }}
            value={isDefault ? props.max : undefined}
            onChange={() => {
              handlerChangeSliderMinMax();
            }}
            ref={maxSlider}
            type="range"
            min={props.min}
            max={props.max}
            step={props.step}
          ></input>
        </div>
      </button>
    </div>
  );
}
export default SliderFilter;
