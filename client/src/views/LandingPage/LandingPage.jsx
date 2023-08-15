import { Link } from "react-router-dom";
import style from "./LandingPage.module.css";
import Dog from "../../components/DogAnimated/DogAnimated";

const Landing = () => {
  return (
    <div className={style.fullContainer}>
      <Dog />
      <div className={style.container}>
        <h1 className={style.title}>DOGS APP HENRY</h1>
        <h6 className={style.subtitle}>Gette, Martín (Cohorte 13a)</h6>
        <Link to={"/home"}>
          <button className={style.btnAccess}>
            <span>Get Start </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Landing;
