import style from "./SearchBar.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getDogs, getDogsByName } from "../../redux/actions";

const SearchBar = () => {
  const [dogsByName, setDogsByName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    setDogsByName(event.target.value);
  };
  const handleSearch = () => {
    if (dogsByName.length === 0) {
      dispatch(getDogs());
      return alert("Please input a name to start the search");
    } else {
      dispatch(getDogsByName(dogsByName));
      setDogsByName("");
    }
  };

  return (
    <div className={style.searchBarContainer}>
      <input
        type="text"
        placeholder="Search by name"
        value={dogsByName}
        onChange={handleChange}
        className={style.input}
      />
      <button onClick={handleSearch} className={style.btnSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
