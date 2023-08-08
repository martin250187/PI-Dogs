import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_DOG = "GET_DOG";
export const ORDER = "ORDER";
export const FILTER_SOURCE = "FILTER_SOURCE";
export const FILTER_NAME = "FILTER_SOURCE";

export const getDogs = () => {
  return async (dispatch) => {
    const dogsData = await axios.get("http://localhost:3001/dogs");
    const dogs = dogsData.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const getDog = (id) => {
  return async (dispatch) => {
    const dog = await axios.get(`http://localhost:3001/dogs/${id}`);
    const dogDetail = dog.data;
    dispatch({ type: GET_DOG, payload: dogDetail });
  };
};
export const orderDogs= (order) => {
  return { type: ORDER, payload: order };
};
export const filterBySource = (source) => {
  return { type: FILTER_SOURCE, payload: source };
};
export const filterByName = (name) => {
  return { type: FILTER_NAME, payload: name };
};
