import DogCardDetail from "../../components/DogCardDetail/DogCardDetail";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import style from "./Detail.module.css";
import { getDogDetail } from "../../redux/actions";

const Detail = () => {
  const { id } = useParams(); //HOOKS
  //Devuelve un objeto con las propiedades y el valor de los segmentos dinamicos de la URL
  const dispatch = useDispatch();
  const dog = useSelector((state) => state.dogDetail);

  console.log(dog);
  useEffect(() => {
    dispatch(getDogDetail(id));
  }, [id]);

  return (
    <div className={style.container}>
      {dog.map((dog) => (
        <DogCardDetail
          key={dog.id}
          name={dog.name}
          breed_group={dog.breed_group}
          height_min={dog.height_min}
          height_max={dog.height_max}
          weight_min={dog.weight_min}
          weight_max={dog.weight_max}
          life_span={dog.life_span}
          temperaments={dog.temperaments}
          source={dog.source}
          image={dog.image}
        />
      ))}
    </div>
  );
};
export default Detail;
