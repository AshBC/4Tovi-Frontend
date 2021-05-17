import React, { Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
    }

    handleClick = e => {
      const count = this.state.count;
      this.setState({ count: count + 1 });
    };

  render() {
    return (
      <div className="appCss">
        <Header counter={this.state.count}/>
        <div className="main-page_left">
        <p>What is TOVI eating for lunch?</p>
        
        <div>
          <Link to="/newResult"> 
          <button className="button" onClick={this.handleClick}>Tell Us!</button>
          </Link> 
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
export default App;
