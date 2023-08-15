import React from "react";
import DogCard from "../DogCard/DogCard";
import style from "../DogsCards/DogsCards.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  orderDogsByName,
  orderDogsByWeight,
  filterBySource,
  getTemperaments,
  filterByTemperament,
} from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";

const DogsCards = () => {
  //const dogs = useSelector((state) => state.dogs);
  const dogsFilter = useSelector((state) => state.dogsFilter);
  //console.log(dogsFilter[0]);
  
  let cant = dogsFilter.length;
  const dispatch = useDispatch();

  const handleOrderByName = (event) => {
    dispatch(orderDogsByName(event.target.value));
  };
  const handleOrderByWeight = (event) => {
    dispatch(orderDogsByWeight(event.target.value));
  };
  const handleFilterSource = (event) => {
    dispatch(filterBySource(event.target.value));
  };

  const temperaments = useSelector((state) => state.temperaments).sort(
    function (a, b) {
      if (a < b) return -1;
      else return 1;
    }
  );
  useEffect(() => {
    dispatch(getTemperaments());
  }, [dispatch]);

  const handleFilterByTemperament = (event) => {
    dispatch(filterByTemperament(event.target.value));
    //console.log(event.target.value);
  };
  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const totalItems = dogsFilter.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDogs = dogsFilter.slice(startIndex, endIndex);

  /********************************************************/
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <div className={style.containerBtn}>
        <div className={style.amountContainer}>
          <h3>The number of cards shown are {cant}</h3>
        </div>
        <hr />
        <div className={style.searchBarContainer}>
          <SearchBar />
        </div>
        <div className={style.toolsContainer}>
          <span>Order By Name</span>
          <select onChange={handleOrderByName}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <span>Order By Weight</span>
          <select onChange={handleOrderByWeight}>
            <option value="A">Ascendente</option>
            <option value="D">Descendente</option>
          </select>
          <span>Filter By Source</span>
          <select onChange={handleFilterSource}>
            <option value="All">All</option>
            <option value="api">API</option>
            <option value="postgres">Postgres</option>
          </select>
          <span>Filter By Temperament</span>
          <select
            className={style.select}
            onChange={(e) => handleFilterByTemperament(e)}
          >
            <option value="All">All</option>
            {temperaments.map((temp) => {
              return (
                <option key={temp} name={temp}>
                  {temp}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <div className={style.container}>
        {currentDogs.map((dog) => (
          <DogCard
            key={dog.id}
            id={dog.id}
            name={dog.name}
            temperaments={dog.temperaments}
            weight={dog.weight_min + " - " + dog.weight_max + " [kg.]"}
            image={dog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DogsCards;
