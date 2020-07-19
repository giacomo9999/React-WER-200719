import React, { Component } from "react";

import CounterDisplay from "../components/CounterDisplay";
import CounterButton from "../components/CounterButton";

class Counter extends Component {
  state = { counterValue: 0 };

  counterChangeHandler = (action, valueIn) => {
    switch (action) {
      case "inc":
        this.setState((prevState) => {
          return { counterValue: prevState.counterValue + 1 };
        });
        break;
      case "dec":
        this.setState((prevState) => {
          return { counterValue: prevState.counterValue - 1 };
        });
        break;
      case "add":
        this.setState((prevState) => {
          return { counterValue: prevState.counterValue + valueIn };
        });
        break;
      case "subtract":
        this.setState((prevState) => {
          return { counterValue: prevState.counterValue - valueIn };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="container-inner">
        <CounterDisplay counterValue={this.state.counterValue} />
        <CounterButton
          buttonName={"Increment"}
          buttonFunction={() => this.counterChangeHandler("inc")}
        />
        <CounterButton
          buttonName={"Decrement"}
          buttonFunction={() => {
            this.counterChangeHandler("dec");
          }}
        />
        <CounterButton
          buttonName={"Add 5"}
          buttonFunction={() => {
            this.counterChangeHandler("add", 5);
          }}
        />
        <CounterButton
          buttonName={"Subtract 5"}
          buttonFunction={() => {
            this.counterChangeHandler("subtract", 5);
          }}
        />
      </div>
    );
  }
}

export default Counter;
