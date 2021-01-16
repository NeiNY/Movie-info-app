import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Movie from "./Components/Movie";
import MoviesConteiner from "./Components/MoviesConteiner";
import SearchForm from "./Components/SearchForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main row col-md-10 offset-md-1 d-flex justify-content-center">
        <SearchForm />
        <div className="App-main row col-md-12 d-flex justify-content-center">
          <Route exact path="/" component={MoviesConteiner} />
          <Route exact path="/movie/:id" component={Movie} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
