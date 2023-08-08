import React from "react";
import axios from "axios"
import style from "./Form.module.css";
import { useState } from "react";
import validate from "./validation";

const Form = () => {
  const [dogData, setDogData] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments:"",
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments:"",
    image: "",
  });
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    validate({ ...dogData, [property]: value });
    setDogData({ ...dogData, [property]: value });
    setErrors(validate({ ...dogData, [property]: value }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/dogs", dogData)
      .then((response) => alert(response.data))
      .catch((error) => alert(error));
  };
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        {/*<img src={animation} alt="NO FOUND" />*/}
        <div>
          <div className={style.containerInput}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={dogData.name}
              onChange={handleChange}
              className={errors.name? style.error : style.success}
            />
            <span className={errors.name ? style.errorMsj : null}>
              {errors.name}
            </span>
          </div>
          <div className={style.containerInput}>
            <label htmlFor="height">Height</label>
            <input
              type="text"
              name="height"
              value={dogData.height}
              onChange={handleChange}
              className={errors.height ? style.error : style.success}
            />
            <span className={errors.height ? style.errorMsj : null}>
              {errors.height}
            </span>
          </div>
          <div className={style.containerInput}>
            <label htmlFor="weight">Weight</label>
            <input
              type="text"
              name="weight"
              value={dogData.weight}
              onChange={handleChange}
              className={errors.weight ? style.error : style.success}
            />
            <span className={errors.weight ? style.errorMsj : null}>
              {errors.weight}
            </span>
          </div>
          <div className={style.containerInput}>
            <label htmlFor="life_span">Life Span</label>
            <input
              type="text"
              name="life_span"
              value={dogData.life_span}
              onChange={handleChange}
              className={errors.life_span ? style.error : style.success}
            />
            <span className={errors.life_span ? style.errorMsj : null}>
              {errors.life_span}
            </span>
          </div>
          <div>
          <label htmlFor="temperaments">Temperaments</label>
            <select>
              <option></option>
            </select>
            <span className={errors.life_span ? style.errorMsj : null}>
              {errors.life_span}
            </span>
          </div>
          <div className={style.containerInput}>
            <label htmlFor="image">Image URL</label>
            <input
              type="text"
              name="image"
              value={dogData.image}
              onChange={handleChange}
              className={errors.image ? style.error : style.success}
            />
            <span className={errors.image ? style.errorMsj : null}>
              {errors.image}
            </span>
          </div>
          <div className={style.containerInput}>
            <button type="submit" className={style.btn}>
              Save Dog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
