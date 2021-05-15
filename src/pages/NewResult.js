import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import slice from "../images/slice2.png";

class NewResult extends Component {
  render() {
    return (
      <div className="appCss">
        <Header /> 
        <div className="main-page_center">
          <div className="round-background">
            <div>
            <img
              className="central-slice"
              src={slice}
              alt="press this image of a pizza slice to move to see hint"
            />
            </div>
            <h2 className="QandA">IT'S PIZZA!</h2>
          </div>
        </div>
        <Footer /> 
      </div>
    );
  }
}
export default NewResult;
