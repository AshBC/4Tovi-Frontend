import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


class App extends Component {
  render() {
    return (
      <div className="appCss">
        <Header />
        <div className="main-page_center">
        <p>What is TOVI eating for lunch?</p>
        
        <div>
          <button className="button">Tell Us!</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
