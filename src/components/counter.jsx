import React, { Component } from "react";
class Counter extends Component {
  state = {
    count:1
  }  
  render() {
    return (
      <React.Fragment>
        {/* <h1>Hello world</h1> */}
        <span>{this.state.count}</span>
        <button>increment</button>
      </React.Fragment>
    );
  }
}

export default Counter;
