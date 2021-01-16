import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovie, fetchMovies } from "../actions/searchAction";
import { setLoading } from "../actions/appAction";

export class SearchForm extends Component {
  changeInputHandler = (e) => {
    this.props.searchMovie(e.target.value);
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="row my-4 col-md-6">
        <input
          type="text"
          className="form-control search col"
          onChange={this.changeInputHandler}
          placeholder="Search..."
        />
        <button className="btn btn-primary col-3 mx-1">Search</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

const mapDispatchToProps = {
  searchMovie,
  fetchMovies,
  setLoading,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
