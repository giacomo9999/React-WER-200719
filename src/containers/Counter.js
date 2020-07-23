import React, { Component } from "react";
import { connect } from "react-redux";

import CounterDisplay from "../components/CounterDisplay";
import CounterButton from "../components/CounterButton";
import CounterResults from "../components/CounterResults";

import {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult,
} from "../store/actions/actions";

class Counter extends Component {
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
          buttonFunction={() => this.props.onStoreResult(this.props.ctr)}
        />
        <CounterResults
          results={this.props.res}
          deleteResult={this.props.onDeleteResult}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { ctr: state.ctr.counterValue, res: state.res.results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddToCounter: () => dispatch(add()),
    onSubtractFromCounter: () => dispatch(subtract()),
    onStoreResult: (result) => dispatch(storeResult(result)),
    onDeleteResult: (elemId) => dispatch(deleteResult(elemId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
