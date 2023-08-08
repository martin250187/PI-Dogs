import DogsCards from "../../components/DogsCards/DogsCards";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDogs } from "../../redux/actions";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDogs());
  }, []);

  return (
    <>
      <DogsCards />
    </>
  );
};
export default Home;
