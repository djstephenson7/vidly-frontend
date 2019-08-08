import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Movies from "./components/movies";
import NavBar from "./components/common/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/common/notFound";
import Home from "./components/home";
import MovieForm from "./components/movieForm";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import Logout from "./components/logout";
import { getCurrentUser } from "./services/authService";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = getCurrentUser();
    this.setState({ user });
  }
  render() {
    return (
      <div className="container">
        <ToastContainer />
        <NavBar user={this.state.user} />
        <Switch>
          <Route path="/movies/:id" exact component={MovieForm} />
          <Route path="/movies/new" component={MovieForm} />
          <Route path="/login" component={LoginForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/register" component={RegisterForm} />
          <Route path="/customers" component={Customers} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          <Route path="/logout" component={Logout} />
          <Redirect to="/not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
