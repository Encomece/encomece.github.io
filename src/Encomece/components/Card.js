import React from "react";
import { NavLink } from "react-router-dom";
import style from "../assets/css/Card.module.css";

const Card = ({ imagePath, headerName, headercontent, route }) => {
  return (
    <div className={style.container}>
      <img src={imagePath} alt={headerName} className={style.images} />
      <div className={style.content}>
        <div className={style.headerName}>{headerName}</div>
        <div className={style.headercontent}>{headercontent}</div>
      </div>
      <div className={style.button}>
        <NavLink to={route} className={style.link}>
          Know More
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
