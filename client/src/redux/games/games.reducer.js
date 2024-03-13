import {
  GET_GAMES_ERROR,
  GET_GAMES_LOADING,
  GET_GAMES_SUCCESS,
  GET_SINGLE_GAMES,
} from "./product.types";

// Note: Do not update/change the initial state
const productInitalState = {
  loading: false,
  error: false,
  data: [],
  SingleData: {},
};

export const productReducer = (
  state = productInitalState,
  { type, payload }
) => {
  switch (type) {
    case GET_GAMES_LOADING: {
      return {
        ...state,
        loading: true,
        error: false,
      };
    }
    case GET_GAMES_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: false,
        data: payload,
      };
    }
    case GET_GAMES_ERROR: {
      return {
        ...state,
        loading: false,
        error: true,
      };
    }
    case GET_SINGLE_GAMES: {
      return {
        ...state,
        loading: false,
        error: false,
        SingleData: payload,
      };
    }
    default: {
      return state;
    }
  }
};
