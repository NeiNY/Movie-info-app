import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <div className="card m-1 col-sm-6" style={{ width: 18 + "rem" }}>
      <Link to={"/movie/" + movie.imdbID}>
        <img
          src={movie.Poster}
          className="card-img-top img-fluid"
          alt={movie.Title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie.Title}</h5>
          <small className="text-muted">{movie.Year}</small>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
