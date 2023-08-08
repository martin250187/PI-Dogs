import React from "react";
import DogCard from "../DogCard/DogCard";
import style from "../DogsCards/DogsCards.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { orderDogs, filterBySource } from "../../redux/actions";
import Pagination from "../Pagination/Pagination";
import SearchBar from "../SearchBar/SearchBar";

const DogsCards = () => {
  //const dogs = useSelector((state) => state.dogs);
  const dogsFilter = useSelector((state) => state.dogsFilter);
  const dispatch = useDispatch();

  const handleOrder = (event) => {
    dispatch(orderDogs(event.target.value));
  };
  const handleFilterSource = (event) => {
    dispatch(filterBySource(event.target.value));
    //console.log(dogsFilter);
  };

  /* Pagination */

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
      <SearchBar />
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilterSource}>
          <option value="All">All</option>
          <option value="api">API</option>
          <option value="postgres">Postgres</option>
        </select>
      </div>
      <div className={style.container}>
        {currentDogs.map((dog) => (
          <DogCard
            key={dog.id}
            id={dog.id}
            name={dog.name}
            temperament={dog.temperament}
            image={dog.image}
          />
        ))}
      </div>
    </div>
  );
};

export default DogsCards;
