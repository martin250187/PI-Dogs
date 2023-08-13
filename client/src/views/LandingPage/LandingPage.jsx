import { Link } from "react-router-dom";
import style from "./LandingPage.module.css"

const Landing = () => {
  return (
    <div className={style.fullContainer}>
    <div className={style.container}>
      <h1 className={style.title}>API DOGS HENRY</h1>
      <Link to={"/home"}>
        <button className={style.btnAccess}><span>Get Start </span></button>
      </Link>
    </div>
    </div>
  );
};
export default Landing;
