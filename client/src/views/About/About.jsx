import style from "./About.module.css";
import image from "../../assets/gette_martin.png";
const About = () => {
  return (
    <div className={style.container}>
      <h1>PROYECTO INDIVIDUAL HENRY</h1>
      <h2>GETTE, FERNANDO MARTIN (Cohorte 13a)</h2>
      <hr />
      <img src={image} alt="Image Not Found" className={style.image} />
      <hr />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      <ul>
        <li>Filter by temperaments</li>
        <li>Save new dog (Temperaments)</li>
      </ul>
    </div>
  );
};

export default About;
