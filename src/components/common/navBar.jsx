import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink to="/" className="nav-item nav-link">
          Vidly
        </NavLink>
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
            <NavLink to="/movies" className="nav-item nav-link">
              Movies
            </NavLink>
            <NavLink to="/customers" className="nav-item nav-link">
              Customers
            </NavLink>
            <NavLink to="/rentals" className="nav-item nav-link">
              Rentals
            </NavLink>
            <NavLink to="/login" className="nav-item nav-link">
              Login
            </NavLink>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavBar;