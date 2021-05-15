import React, { Component } from "react";

class Counter extends Component {
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
     <div>
         <div>{this.state.count}</div>
      {/* <button className="block" onClick={this.handleClick}>
          <div className="counter">{this.state.count}</div>
        </button> */}
    </div>
      );
    }
  }
  export default Counter;