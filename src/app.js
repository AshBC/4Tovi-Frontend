import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div className="appCss">
        <Header />
        <div className="main-page_left">
        <p>What is TOVI eating for lunch?</p>
        
        <div>
          <Link to="/newResult">
          <button className="button">Tell Us!</button>
          </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
