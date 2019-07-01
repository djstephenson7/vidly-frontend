import React, { Component } from 'react';
import './App.css';
import Movies from './components/movies';
import NavBar from './components/common/navBar';
import { Route, Switch, Redirect } from 'react-router-dom';
import Customers from './components/customers';
import Rentals from './components/rentals';
import NotFound from './components/common/notFound';
import Home from './components/home';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        <Switch>
          <Route path="/movies" component={Movies} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
