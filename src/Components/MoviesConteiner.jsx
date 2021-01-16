import React from "react";
import { connect } from "react-redux";
import Loader from "./Loader";
import MovieCard from "./MovieCard";

const MoviesConteiner = ({ movies, loading }) => {
  return (
    <>
      {movies !== undefined && movies.length ? (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : loading && movies !== undefined ? (
        <Loader />
      ) : (
        <h2 className="text-center">Write title of movie</h2>
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  loading: state.app.loading,
});

export default connect(mapStateToProps)(MoviesConteiner);
