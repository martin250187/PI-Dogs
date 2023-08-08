import { GET_DOGS, GET_DOG, ORDER, FILTER_SOURCE, FILTER_NAME } from "./actions";

const initialState = {
  dogs: [],
  dogDetail: [],
  dogsFilter: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DOGS:
      return { ...state, dogs: action.payload, dogsFilter: action.payload };

    case GET_DOG:
      return { ...state, dogDetail: action.payload };

    case ORDER:
      const sortObject = [...state.dogs].sort((a, b) => {
        if (a.name > b.name) {
          return action.payload === "A" ? 1 : -1;
        } else if (a.name < b.name) {
          return action.payload === "D" ? 1 : -1;
        } else return 0;
      });
      return {
        ...state,
        dogsFilter: sortObject,
      };

    case FILTER_SOURCE:
      const filterbySource =
        action.payload !== "All"
          ? [...state.dogs].filter(
              (dog) => dog.source === action.payload
            )
          : [...state.dogs];
      return {
        ...state,
        dogsFilter: filterbySource,
      };

      case FILTER_NAME:
      const filterbyName =
        action.payload !== ""
          ? [...state.dogs].filter(
              (dog) => dog.source === action.payload
            )
          : [...state.dogs];
      return {
        ...state,
        dogsFilter: filterbyName,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
