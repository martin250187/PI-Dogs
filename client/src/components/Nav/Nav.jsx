import style from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className={style.navBar}>
      <div className={style.containerBtn}>
        <Link to={"/home"}>
          <button className={style.navBtn}>Home</button>
        </Link>
        <Link to={"/form"}>
          <button className={style.navBtn}>New Dog</button>
        </Link>
        <Link to={"/about"}>
          <button className={style.navBtn}>About</button>
        </Link>
        <Link to={"/"}>
          <button className={style.navBtn}>Salir</button>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
