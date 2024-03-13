// Product actions here

import axios from "axios";
import {
  GET_GAMES_ERROR,
  GET_GAMES_LOADING,
  GET_GAMES_SUCCESS,
  GET_SINGLE_GAMES,
} from "./games.types";

// redux doesnt handle asynchronous REQUEST
// redux thunk external librariy
// to handle asynchronous REQUEST

/// asynchronous Function

export const ACTION_GET_GAMES = (id) => async (dispatch) => {
  dispatch({ type: GET_GAMES_LOADING });
  // console.log("data")
  try {
    if (id) {
      let res = await axios.get("http://localhost:8080/games/" + id);
      console.log(res.data, "from single");

      return dispatch({ type: GET_SINGLE_GAMES, payload: res.data });
    }

    let res = await axios.get("http://localhost:8080/games");

    console.log(res, "from redux actions");

    return dispatch({ type: GET_GAMES_SUCCESS, payload: res.data });
  } catch (err) {
    dispatch({ type: GET_GAMES_ERROR, payload: err.message });
  }
};
