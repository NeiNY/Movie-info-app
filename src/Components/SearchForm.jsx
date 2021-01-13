import React, { Component } from "react";
import { connect } from "react-redux";
import { searchMovie, fetchMovie } from "../actions/searchAction";

export class SearchForm extends Component {
  changeInputHandler = (e) => {
    this.props.searchMovie(e.target.value);
  };

  submitHandler = (e) => {
    e.preventDefault();

    this.props.fetchMovie(this.props.text);
  };

  render() {
    return (
      <form onSubmit={this.submitHandler} className="row my-4 col-md-6">
        <input
          type="text"
          className="form-control search col"
          onChange={this.changeInputHandler}
        />
        <button className="btn btn-primary col-2 mx-1">Search</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.movies.text,
});

const mapDispatchToProps = {
  searchMovie,
  fetchMovie,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
