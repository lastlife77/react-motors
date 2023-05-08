import React, { useState } from "react";
import styles from "./Search.scss";
import search from "./../../img/search.svg";

function Search(props) {
  //props placeholder

  return (
    <div className="search">
      <div className="search__icon">
        <img src={search}></img>
      </div>
      <div className="search__input">
        <input placeholder={props.placeholder}></input>
      </div>
    </div>
  );
}
export default Search;
