import React from "react";
import "./App.css";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import MoviesConteiner from "./Components/MoviesConteiner";
import SearchForm from "./Components/SearchForm";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main row col-md-10 offset-md-1 d-flex justify-content-center">
        <SearchForm />
        <MoviesConteiner />
      </div>
      <Footer />
    </div>
  );
}

//  http://www.omdbapi.com/?i=tt3896198&apikey=f151a0ab  API

export default App;
