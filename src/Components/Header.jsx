import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <Link to="/" className="col-3 text-center">
        Movies
      </Link>
    </header>
  );
};

export default Header;
