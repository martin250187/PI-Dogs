import axios from "axios";
export const GET_DOGS = "GET_DOGS";
export const GET_DOG_DETAIL = "GET_DOG_DETAIL";
export const GET_DOGS_BY_NAME = "GET_DOGS_BY_NAME";
export const GET_TEMPERAMENTS = "GET_TEMPERAMENTS";
export const ORDER_BY_NAME = "ORDER_BY_NAME";
export const ORDER_BY_WEIGHT = "ORDER_BY_WEIGHT";
export const FILTER_SOURCE = "FILTER_SOURCE";
export const FILTER_TEMP = "FILTER_TEMP";

export const getDogs = () => {
  return async (dispatch) => {
    const dogsData = await axios.get("http://localhost:3001/dogs");
    const dogs = dogsData.data;
    dispatch({ type: GET_DOGS, payload: dogs });
  };
};

export const getDogsByName = (name) => {
  return async (dispatch) => {
    const dogData = await axios.get(`http://localhost:3001/dogs?name=${name}`);
    const dog = dogData.data;
    dispatch({ type: GET_DOGS_BY_NAME, payload: dog });
  };
};

export const getTemperaments = () => {
  return async function (dispatch) {
    const apiData = await axios.get("http://localhost:3001/temperaments");

    const temperamentsList = apiData.data.map((temp) => temp.name);

    return dispatch({ type: GET_TEMPERAMENTS, payload: temperamentsList });
  };
};

export const getDogDetail = (id) => {
  return async (dispatch) => {
    const dog = await axios.get(`http://localhost:3001/dogs/${id}`);
    const dogDetail = dog.data;
    dispatch({ type: GET_DOG_DETAIL, payload: dogDetail });
  };
};

export const orderDogsByName = (order) => {
  return { type: ORDER_BY_NAME, payload: order };
};

export const orderDogsByWeight = (orderByWeight) => {
  return { type: ORDER_BY_WEIGHT, payload: orderByWeight };
};

export const filterBySource = (source) => {
  return { type: FILTER_SOURCE, payload: source };
};

export const filterByTemperament = (temp) => {
  return { type: FILTER_TEMP, payload: temp };
};
