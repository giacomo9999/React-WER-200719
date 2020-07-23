import React, { Component } from "react";

import * as actionTypes from "../store/actions";
import CounterDisplay from "../components/CounterDisplay";
import CounterButton from "../components/CounterButton";
import CounterResults from "../components/CounterResults";
import { connect } from "react-redux";

class Counter extends Component {
  // state = { counterValue: 0 };

  // counterChangeHandler = (action, valueIn) => {
  //   switch (action) {
  //     case "inc":
  //       this.setState((prevState) => {
  //         return { counterValue: prevState.counterValue + 1 };
  //       });
  //       break;
  //     case "dec":
  //       this.setState((prevState) => {
  //         return { counterValue: prevState.counterValue - 1 };
  //       });
  //       break;
  //     case "add":
  //       this.setState((prevState) => {
  //         return { counterValue: prevState.counterValue + valueIn };
  //       });
  //       break;
  //     case "subtract":
  //       this.setState((prevState) => {
  //         return { counterValue: prevState.counterValue - valueIn };
  //       });
  //       break;
  //     default:
  //       break;
  //   }
  // };

  render() {
    return (
      <div className="container-inner">
        <CounterDisplay counterValue={this.props.ctr} />
        <CounterButton
          buttonName={"Increment"}
          buttonFunction={this.props.onIncrementCounter}
        />
        <CounterButton
          buttonName={"Decrement"}
          buttonFunction={this.props.onDecrementCounter}
        />
        <CounterButton
          buttonName={"Add 5"}
          buttonFunction={this.props.onAddToCounter}
        />
        <CounterButton
          buttonName={"Subtract 5"}
          buttonFunction={this.props.onSubtractFromCounter}
        />
        <CounterButton
          buttonName={"Store Result"}
          buttonFunction={this.props.onStoreResult}
        />
        <CounterResults
          results={this.props.results}
          deleteResult={this.props.onDeleteResult}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ctr: state.counterValue, results: state.results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddToCounter: () => dispatch({ type: actionTypes.ADD, payload: 5 }),
    onSubtractFromCounter: () =>
      dispatch({ type: actionTypes.SUBTRACT, payload: 5 }),
    onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    onDeleteResult: (elemId) =>
      dispatch({ type: actionTypes.DELETE_RESULT, elemId: elemId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
