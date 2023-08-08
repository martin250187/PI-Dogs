import styled from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = () => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
    //console.log(event.target.value);
  };
  const handleSearch = (name) => {
    //dispatch(filterByName(name));
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Buscar x nombre"
        onChange={handleChange}
      />
      <button onClick={handleSearch(name)}>Buscar</button>
    </div>
  );
};

export default SearchBar;
