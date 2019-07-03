import React from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../fakeBackend/fakeGenreService";

class MovieForm extends Form {
  state = {
    data: {
      title: "",
      genre: [{ _id: "", genre: "" }, ...getGenres()],
      numberInStock: "",
      rate: ""
    },
    errors: {}
  };

  schema = {
    title: Joi.string()
      .required()
      .label("Title"),
    numberInStock: Joi.number()
      .integer()
      .required()
      .positive()
      .max(100),
    rate: Joi.number()
      .required()
      .positive()
      .max(10)
  };

  render() {
    const { genre } = this.state.data;

    return (
      <React.Fragment>
        <h1>New Movie</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("numberInStock", "Number In Stock")}
          <div className="form-group">
            <label>Genres</label>
            <select className="form-control">
              {genre.map(g => (
                <option key={g._id}>{g.name}</option>
              ))}
            </select>
          </div>
          {this.renderInput("rate", "Rate")}
          {this.renderButton("Submit")}
        </form>
      </React.Fragment>
    );
  }
}

export default MovieForm;
