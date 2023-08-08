import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <>
      <h1>Estoy en Landing</h1>
      <Link to={"/home"}>
        <button>Entrar</button>
      </Link>
    </>
  );
};
export default Landing;
