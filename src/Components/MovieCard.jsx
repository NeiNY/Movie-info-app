import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="card mb-3 mx-3" style={{ maxWidth: 520 + "px" }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={movie.Poster} class="img-fluid" alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{movie.Title}</h5>
            <small className="text-muted">{movie.Year}</small>
            <p className="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
