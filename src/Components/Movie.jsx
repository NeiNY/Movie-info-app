import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchMovie } from "../actions/searchAction";

export class Movie extends Component {
  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
  }

  render() {
    const { movie } = this.props;

    return (
      <div className="card mb-2" style={{ maxwidth: 500 + "px" }}>
        <div className="row">
          <div className="col-lg-3 text-center">
            <img src={movie.Poster} className="img-fluid" alt="..." />
          </div>
          <div className="card-body col-lg-9">
            <h5 className="card-title">{movie.Title}</h5>
            <ul class="list-group list-group-flush">
              <li className="list-group-item">
                <strong>Genre:</strong> {movie.Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {movie.Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {movie.Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {movie.imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {movie.Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {movie.Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {movie.Actors}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
});

const mapDispatchToProps = {
  fetchMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
