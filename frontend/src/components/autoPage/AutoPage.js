import React, { useState } from "react";
import styles from "./AutoPage.scss";
import Slider from "../../UI_Library/Atoms/Slider/Slider";
import close from "../../UI_Library/img/closeBig.svg";
import message from "../../UI_Library/img/message.svg";
import compare from "../../UI_Library/img/compare.svg";
import compareHover from "../../UI_Library/img/compareHover.svg";
import favorite from "../../UI_Library/img/favorite.svg";
import favoriteHover from "../../UI_Library/img/favoriteHover.svg";
import share from "../../UI_Library/img/share.svg";
import shareHover from "../../UI_Library/img/shareHover.svg";
import engine from "../../UI_Library/img/engine.svg";
import transmission from "../../UI_Library/img/transmission.svg";
import volume from "../../UI_Library/img/volume.svg";
import year from "../../UI_Library/img/year.svg";

function AutoPage(props) {
  //props title images price characteristics
  return (
    <div className="autoPage_wrapper">
      <div className="autoPage_content">
        <img
          onClick={props.onClick}
          className="autoPage_close"
          src={close}
        ></img>
        <div className="autoPage_head">
          <div className="autoPage_head_left-block">
            <p className="autoPage_head_left-block_title">{props.title}</p>
            <div className="autoPage_head_left-block_buttons">
              <button className="autoPage_head_left-block_buttons_call autoPage_button_blue">
                <p>Заказать звонок</p>
              </button>
              <button className="autoPage_head_left-block_buttons_message autoPage_button_blue">
                <img src={message}></img>
              </button>
            </div>
          </div>
          <div className="autoPage_head_right-block">
            <div className="autoPage_head_right-block_utilits">
              <div className="autoPage_head_right-block_utilits_item">
                <img
                  className="autoPage_head_right-block_utilits_item_default"
                  src={favorite}
                ></img>
                <img
                  className="autoPage_head_right-block_utilits_item_hover"
                  src={favoriteHover}
                ></img>
              </div>
              <div className="autoPage_head_right-block_utilits_item">
                <img
                  className="autoPage_head_right-block_utilits_item_default"
                  src={compare}
                ></img>
                <img
                  className="autoPage_head_right-block_utilits_item_hover"
                  src={compareHover}
                ></img>
              </div>
              <div className="autoPage_head_right-block_utilits_item">
                <img
                  className="autoPage_head_right-block_utilits_item_default"
                  src={share}
                ></img>
                <img
                  className="autoPage_head_right-block_utilits_item_hover"
                  src={shareHover}
                ></img>
              </div>
            </div>
            <div className="autoPage_head_right-block_tags">
              <div className="autoPage_head_right-block_tags_tag">
                <p>В НАЛИЧИИ</p>
              </div>
              <div className="autoPage_head_right-block_tags_tag">
                <p>ВЫГОДА 215 000 РУБЛЕЙ</p>
              </div>
            </div>
          </div>
        </div>
        <div className="autoPage_body">
          <div className="autoPage_body_left-block">
            <div className="autoPage_body_left-block_slider">
              {<Slider items={props.images}></Slider>}
            </div>
            <div className="autoPage_body_left-block_characteristics">
              <p className="autoPage_body_left-block_characteristics_title">
                Характеристики
              </p>
              <div className="autoPage_body_left-block_characteristics_items">
                <div className="autoPage_body_left-block_characteristics_items_item">
                  <p className="autoPage_body_left-block_characteristics_items_item_title">
                    Тип кузова
                  </p>
                  <p className="autoPage_body_left-block_characteristics_items_item_name">
                    {props.characteristics[0]}
                  </p>
                </div>
                <div className="autoPage_body_left-block_characteristics_items_item">
                  <p className="autoPage_body_left-block_characteristics_items_item_title">
                    Привод
                  </p>
                  <p className="autoPage_body_left-block_characteristics_items_item_name">
                    {props.characteristics[1]}
                  </p>
                </div>
                <div className="autoPage_body_left-block_characteristics_items_item">
                  <p className="autoPage_body_left-block_characteristics_items_item_title">
                    Трансмиссия
                  </p>
                  <p className="autoPage_body_left-block_characteristics_items_item_name">
                    {props.characteristics[2]}
                  </p>
                </div>
                <div className="autoPage_body_left-block_characteristics_items_item">
                  <p className="autoPage_body_left-block_characteristics_items_item_title">
                    Объем двигателя
                  </p>
                  <p className="autoPage_body_left-block_characteristics_items_item_name">
                    {props.characteristics[3] + " л"}
                  </p>
                </div>
                <div className="autoPage_body_left-block_characteristics_items_item">
                  <p className="autoPage_body_left-block_characteristics_items_item_title">
                    Тип двигателя
                  </p>
                  <p className="autoPage_body_left-block_characteristics_items_item_name">
                    {props.characteristics[4]}
                  </p>
                </div>
                <div className="autoPage_body_left-block_characteristics_items_item">
                  <p className="autoPage_body_left-block_characteristics_items_item_title">
                    Год выпуска
                  </p>
                  <p className="autoPage_body_left-block_characteristics_items_item_name">
                    {props.characteristics[5]}
                  </p>
                </div>
                <div className="autoPage_body_left-block_characteristics_items_item">
                  <p className="autoPage_body_left-block_characteristics_items_item_title">
                    Мощность
                  </p>
                  <p className="autoPage_body_left-block_characteristics_items_item_name">
                    {props.characteristics[6]}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="autoPage_body_right-block">
            <div className="autoPage_body_right-block_price">
              <p>{props.price + " ₽"}</p>
            </div>
            <button className="autoPage_body_right-block_reservation autoPage_button_blue">
              <p>ЗАБРОНИРОВАТЬ</p>
            </button>
            <div className="autoPage_body_right-block_characteristics">
              <div className="autoPage_body_right-block_characteristics_item">
                <img src={volume}></img>
                <p>{props.characteristics[3] + " л"}</p>
              </div>
              <div className="autoPage_body_right-block_characteristics_item">
                <img src={transmission}></img>
                <p>{props.characteristics[2]}</p>
              </div>
              <div className="autoPage_body_right-block_characteristics_item">
                <img src={year}></img>
                <p>{props.characteristics[5]}</p>
              </div>
              <div className="autoPage_body_right-block_characteristics_item">
                <img src={engine}></img>
                <p>{props.characteristics[4]}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AutoPage;
