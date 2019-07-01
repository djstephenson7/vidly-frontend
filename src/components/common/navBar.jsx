import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="nav-item nav-link">
          Vidly
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/movies" className="nav-item nav-link">
              Movies
            </Link>
            <Link to="/customers" className="nav-item nav-link">
              Customers
            </Link>
            <Link to="/rentals" className="nav-item nav-link">
              Rentals
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;
