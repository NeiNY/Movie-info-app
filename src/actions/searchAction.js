import { SEACRH_MOVIE, FETCH_MOVIES, FETCH_MOVIE } from "./types";

export const searchMovie = (text) => (dispatch) => {
  dispatch({
    type: SEACRH_MOVIE,
    payload: text,
  });
};

export const fetchMovies = (text) => (dispatch) => {
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

export const fetchMovie = (id) => (dispatch) => {
  return fetch(`http://www.omdbapi.com/?apikey=f151a0ab&i=${id}`)
    .then((response) => response.json())
    .then((response) =>
      dispatch({
        type: FETCH_MOVIE,
        payload: response,
      })
    )
    .catch((error) => console.log(error));
};
