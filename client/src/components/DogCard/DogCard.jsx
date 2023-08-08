import React from "react";
import style from "./DogCard.module.css";
import { Link } from "react-router-dom";

const DogCard = ({ id, name, temperament, image }) => {
  return (
    <div className={style.containerCard}>
      <Link to={`/detail/${id}`}>
        <h3 className={style.name}>{name}</h3>
      </Link>
      <h5>{temperament}</h5>
      <img className={style.img} src={image} alt="No se encuentra la imágen!" />
    </div>
  );
};
export default DogCard;
