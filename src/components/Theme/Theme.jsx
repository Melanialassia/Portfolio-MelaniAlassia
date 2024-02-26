import React, { useState } from "react";
//FUNCTION
import { getImageUrl } from "../../utils";
//STYLE
import style from "./Theme.module.css";

const Theme = ({ dark, handleChange }) => {
  return (
    <div className={style.container}>
      <button
        href="#"
        onClick={handleChange}
        className={`${style.theme} ${dark ? style.pressed : ""}`}
      >
        <img
          src={
            dark ? getImageUrl("theme/sun-black.png") : getImageUrl("theme/moon.png")
          }
          alt="iconMoon"
          className={style.image}
        />
      </button>
    </div>
  );
};

export default Theme;
