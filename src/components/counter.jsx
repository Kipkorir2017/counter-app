import React, { Component } from "react";
class Counter extends Component {
  state = {
    tags: ["tag1", "tag2", "tag3"],
    count: 0,
    imageUrl: "https://picsum.photos/400",
  };
  constructor(){
    super();
    this.handleIncrement =this.handleIncrement.bind(this)
  };
  handleIncrement=() =>{
   
    this.setState({count: this.state.count +1})
    
  }
  handleDecrement=()=>{
    this.setState({count: this.state.count -1})
  };
  dohandleIncrement=()=>{
    this.handleIncrement({id:1})
  };
  style = {
    fontSize: 50,
    fontWeight: 900,
  };
  render() {
    return (
      <React.Fragment>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <img src={this.state.imageUrl} alt="" />
        {/* <h1>Hello world</h1> */}
        <span className="badge badge-primary m-2">{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm m-2"
        >
          like
        </button>
        <button
          onClick={this.handleDecrement}
          className="btn btn-dark btn-sm "
        >
          unlike
        </button>
        <div>
          <ul>
            {this.state.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
      </React.Fragment>
    );
  }
  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>zero</h1> : count;
  }
}

export default Counter;
