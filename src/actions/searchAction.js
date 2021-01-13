import { SEACRH_MOVIE, FETCH_MOVIES } from "./types";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEACRH_MOVIE,
    payload: text,
  });
};

export const fetchMovie = (text) => (dispatch) => {
  return fetch(`http://www.omdbapi.com/?apikey=f151a0ab&s=${text}`)
    .then((response) => response.json())
    .then((response) =>
      dispatch({
        type: FETCH_MOVIES,
        payload: response.Search,
      })
    )
    .catch((error) => console.log(error));
};
