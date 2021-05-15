import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

class EmptyR extends Component {
  render() {
    return (
      <div className="appCss">
        <Header />
        <div className="main-center">
          <div className="fade-background">
            <div className="central-image--tip">
              <p className="tip">Tip:</p>
              <h2 className="answer">IT'S ALWAYS PIZZA.</h2>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default EmptyR;
