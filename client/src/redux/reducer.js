import {
  GET_DOGS,
  GET_DOG_DETAIL,
  GET_DOGS_BY_NAME,
  GET_TEMPERAMENTS,
  ORDER_BY_NAME,
  ORDER_BY_WEIGHT,
  FILTER_SOURCE,
  FILTER_TEMP,
} from "./actions";

const initialState = {
  dogs: [],
  dogDetail: [],
  dogsFilter: [],
  temperaments: [],
  currentPage: 1,
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, dogsFilter: action.payload };
    case GET_DOGS_BY_NAME:
      return {
        ...state,
        dogsFilter: action.payload,
      };
    case GET_DOG_DETAIL:
      return { ...state, dogDetail: action.payload };

    case GET_TEMPERAMENTS:
      return {
        ...state,
        temperaments: action.payload,
      };
    case ORDER_BY_NAME:
      const sortName = [...state.dogs].sort((a, b) => {
        if (a.name > b.name) {
          return action.payload === "A" ? 1 : -1;
        } else if (a.name < b.name) {
          return action.payload === "D" ? 1 : -1;
        } else return 0;
      });
      return {
        ...state,
        dogsFilter: sortName,
      };
    case ORDER_BY_WEIGHT:
      const sortWeight = [...state.dogs].sort((a, b) => {
        if (a.weight_min !== null && b.weight_min !== null) {
          if (a.weight_min > b.weight_min) {
            return action.payload === "A" ? 1 : -1;
          } else if (a.weight_min < b.weight_min) {
            return action.payload === "D" ? 1 : -1;
          } else return 0;
        }
      });
      return {
        ...state,
        dogsFilter: sortWeight,
      };

    case FILTER_SOURCE:
      const filterBySource =
        action.payload !== "All"
          ? [...state.dogs].filter((dog) => dog.source === action.payload)
          : [...state.dogs];
      return {
        ...state,
        dogsFilter: filterBySource,
      };

    case FILTER_TEMP:
      const filterTemp = [...state.dogs].filter((dog) => {
        if (dog.temperaments) {
          const tempArray = dog.temperaments
            .split(",")
            .map((temp) => temp.trim());
          return tempArray.includes(action.payload);
        } else {
          return false;
        }
      });
      return {
        ...state,
        dogsFilter: filterTemp,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
