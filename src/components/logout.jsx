import React, { Component } from "react";

class Logout extends Component {
  async componentDidMount() {
    localStorage.removeItem("token");

    window.location = "/";
  }

  render() {
    return null;
  }
}

export default Logout;
