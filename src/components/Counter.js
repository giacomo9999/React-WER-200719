import React, { Component } from "react";

class Counter extends Component {
  state = { counterVal: 0 };
  render() {
    return (
      <div className="container-outer">
        <h1>Counter</h1>
      </div>
    );
  }
}

export default Counter;
