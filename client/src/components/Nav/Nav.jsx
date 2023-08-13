import style from "./Nav.module.css";
import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

const Nav = (props) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    // Al montar el componente, establecemos el foco en el botón Home
    buttonRef.current.focus();
  }, []);

  return (
    <nav className={style.navBar}>
      <div className={style.containerBtn}>
        <Link to={"/home"}>
          <button ref={buttonRef} className={style.navBtn}>
            Home
          </button>
        </Link>
        <Link to={"/form"}>
          <button className={style.navBtn}>New Dog</button>
        </Link>
        <Link to={"/about"}>
          <button className={style.navBtn}>About</button>
        </Link>
        <Link to={"/"}>
          <button className={style.navBtn}>Get Out</button>
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
