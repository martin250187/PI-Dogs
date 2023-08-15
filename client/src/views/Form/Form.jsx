import React from "react";
import axios from "axios";
import style from "./Form.module.css";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import validate from "./validation";
import { useSelector, useDispatch } from "react-redux";
import { getTemperaments } from "../../redux/actions";

const Form = () => {
  const history = useHistory();
  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const [dogData, setDogData] = useState({
    name: "",
    height_min: "",
    height_max: "",
    weight_min: "",
    weight_max: "",
    life_span: "",
    temperaments: [],
    image: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    height: "",
    weight: "",
    life_span: "",
    temperaments: "",
    image: "",
  });

  const [disabled, setDisabled] = useState(true);

  function handleSelect(e) {
    setDogData({
      ...dogData,
      temperaments: [...dogData.temperaments, e.target.value],
    });
  }

  function handleDelete(el) {
    setDogData({
      ...dogData,
      temperaments: dogData.temperaments.filter((temp) => temp !== el),
    });
  }
  const btnState = async (err) => {
    if (Object.keys(err).length === 0) setDisabled(false);
  };
  const handleChange = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    validate({ ...dogData, [property]: value });
    setDogData({ ...dogData, [property]: value });
    setErrors(validate({ ...dogData, [property]: value }));
    btnState(validate({ ...dogData, [property]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post("http://localhost:3001/dogs", dogData)
      .then((response) => alert(response.data))
      .catch((error) => alert(error));
    history.push("/home");
  };
  return (
    <div className={style.container}>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <div className={style.containerInput}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              value={dogData.name}
              onChange={handleChange}
              className={errors.name ? style.error : style.success}
            />
            <span className={errors.name ? style.errorMsj : null}>
              {errors.name}
            </span>
          </div>
          <div className={style.containerInput}>
            <h4>Heights (cm)</h4>
            <div className={style.heightInput}>
              <label htmlFor="height_min">Min</label>
              <input
                type="number"
                name="height_min"
                value={dogData.height_min}
                onChange={handleChange}
                className={errors.height ? style.error : style.success}
              />
              <label htmlFor="height_max">Max</label>
              <input
                type="number"
                name="height_max"
                value={dogData.height_max}
                onChange={handleChange}
                className={errors.height ? style.error : style.success}
              />
            </div>
            <span className={errors.height ? style.errorMsj : null}>
              {errors.height}
            </span>
          </div>
          <div className={style.containerInput}>
            <h4>Weight (kg.)</h4>
            <div className={style.heightInput}>
              <label htmlFor="weight_min">Min</label>
              <input
                type="number"
                name="weight_min"
                value={dogData.weight_min}
                onChange={handleChange}
                className={errors.weight ? style.error : style.success}
              />
              <label htmlFor="weight_max">Max</label>
              <input
                type="number"
                name="weight_max"
                value={dogData.weight_max}
                onChange={handleChange}
                className={errors.weight ? style.error : style.success}
              />
            </div>
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
          <div className={style.containerInput}>
            <label>Temperaments</label>
            <select className={style.select} onChange={(e) => handleSelect(e)}>
              {temperaments.map((temp) => {
                return (
                  <option key={temp} name={temp}>
                    {temp}
                  </option>
                );
              })}
            </select>
            <div>
              {dogData.temperaments.map((e) => (
                <div key={e}>
                  <button
                    className={style.buttonDelete}
                    onClick={() => handleDelete(e)}
                  >
                    x
                  </button>
                  <span className={style.spanTemp}>{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={style.containerInput}>
            <label htmlFor="image">Image URL</label>
            <input
              type="url"
              name="image"
              value={dogData.image}
              placeholder="http://webImage.png"
              onChange={handleChange}
              className={errors.image ? style.error : style.success}
            />
            <span className={errors.image ? style.errorMsj : null}>
              {errors.image}
            </span>
          </div>
          <div className={style.containerInput}>
            <button
              disabled={disabled}
              type="submit"
              className={disabled ? style.btnDisabled : style.btnEnabled}
            >
              Save Dog
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
