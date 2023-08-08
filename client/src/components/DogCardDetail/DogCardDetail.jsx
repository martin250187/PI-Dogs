import React from "react";
import style from "./DogCardDetail.module.css";

const DogCardDetail = ({ name, height, weight, life_span, temperaments, source, image }) => {
  return (
    <div className={style.container}>
      <div className={style.textContainer}>
        <h2 className={style.nameTitle}>{name}</h2>
        <h2>Height (metric) | {height}</h2>
        <h2>Weight (metric) | {weight}</h2>
        <h2>Life Span | {life_span}</h2>
        <h3>Temperaments | {temperaments}</h3>
        <h3>Source | {source}</h3>
      </div>
      <div className={style.imgContainer}>
        <img className={style.img} src={image} alt={"No tiene imagen"}></img>
      </div>
    </div>
  );
};
export default DogCardDetail;
