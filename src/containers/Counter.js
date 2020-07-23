import React, { Component } from "react";

import * as actionTypes from "../store/actions";
import CounterDisplay from "../components/CounterDisplay";
import CounterButton from "../components/CounterButton";
import CounterResults from "../components/CounterResults";
import { connect } from "react-redux";

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
  console.log("State:", state);
  return { ctr: state.ctr.counterValue, res: state.res.results };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAddToCounter: () => dispatch({ type: actionTypes.ADD, payload: 5 }),
    onSubtractFromCounter: () =>
      dispatch({ type: actionTypes.SUBTRACT, payload: 5 }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (elemId) =>
      dispatch({ type: actionTypes.DELETE_RESULT, elemId: elemId }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
