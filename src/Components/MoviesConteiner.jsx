import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";

const MoviesConteiner = ({ movies }) => {
  return (
    <div className="row col-md-12 d-flex justify-content-center">
      {movies.length ? (
        movies.map((movie, index) => <MovieCard key={index} movie={movie} />)
      ) : (
        <h2 className="text-center">Write title of movie</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

export default connect(mapStateToProps)(MoviesConteiner);
