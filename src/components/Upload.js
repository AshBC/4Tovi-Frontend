import React, { Component } from "react";
import Header from "./Header";
import axios from "axios";
import slice from "../images/slice2.png";

class Upload extends Component {
  state = {
    name: "",
    instructions: "",
    ingredients: "",
    formFieldsFilled: false,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.postNewRecipe();
  };

  postNewRecipe = () => {
    axios
      .post(`http://localhost:8080/recipes`, {
        name: this.state.name,
        instructions: this.state.instructions,
        ingredients: this.state.ingredients,
      })
      .then((response) => {
        console.log("this is the resp for posting to api", response);
        this.setState({
          name: "",
          instructions: "",
          ingredients: "",
        });
      })
      .catch((err) => console.log(err));
  };

  checkFormFilled = () => {
    const { name, instructions } = this.state;
    if (name.length > 2 && instructions.length > 5) {
      this.setState({ formFieldsFilled: true });
    } else {
      this.setState({ formFieldsFilled: false });
    }
  };

  handleNameInputChange = (event) => {
    this.setState({
      name: event.target.value,
    });
    this.checkFormFilled();
  };

  handleInstructionsInputChange = (event) => {
    this.setState({
      instructions: event.target.value,
    });
  };

  handleVideoIngredientsInputChange = (event) => {
    this.setState({
      ingredients: event.target.value,
    });
    this.checkFormFilled();
  };

  render() {
    return (
      <div>
        <div className="form-page">
          <h1 className="upload-title">Add Your Exhibition</h1>
          <form onSubmit={this.handleFormSubmit}>
            <img
              className="upload-image"
              src={slice}
            />

            <h3 className="upload-subtitles">Recipe Title</h3>
            <textarea
              onChange={this.handleNameInputChange}
              className="userName-input"
              name="uploadtitle"
              placeholder="What's the name of your pizza?"
              alt="Add the name of your pizza here"
              value={this.state.uploadTitle}
            />

            <h3 className="upload-subtitles">Recipe Instructions</h3>
            <textarea
              onChange={this.handleInstructionsInputChange}
              className="userName-input"
              name="dates"
              placeholder="Only if you want"
              alt="add your cooking instructions here. There is no character limit"
              value={this.state.dates}
            />

            <h3 className="upload-subtitles">Recipe Ingredients</h3>
            <textarea
              onChange={this.handleVideoIngredientsInputChange}
              className="userName-input"
              name="onlinespace"
              placeholder="Add your ingredients here"
              alt="This text box has no character limit. Add your ingredients here separated by commas"
              value={this.state.onlineSpace}
            />

            <button
              disabled={this.state.formFieldsFilled ? false : true}
              className="btn-publish"
            >
              Publish
            </button>
          </form>
          <Header />
        </div>
      </div>
    );
  }
}

export default Upload;
