import React, { Component } from "react";
class Counter extends Component {
  state = {
    count:0
  }  
  render() {
    return (
      <React.Fragment>
        {/* <h1>Hello world</h1> */}
        <span>{this.formatCount}</span>
        <button>increment</button>
      </React.Fragment>
    );
  }
  formatCount(){
    const{count}=this.state;
    return count === 0 ?<h1>zero</h1>:count;
  }
}

export default Counter;
