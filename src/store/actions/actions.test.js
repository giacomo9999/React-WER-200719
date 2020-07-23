import * as actionTypes from "./actions";

import {
  increment,
  decrement,
  add,
  subtract,
  storeResult,
  deleteResult,
} from "./actions";

describe("Action creator tests", () => {
  test("Returns an action of type INCREMENT", () => {
    const action = increment();
    expect(action).toEqual({ type: "INCREMENT" });
  });
  test("Returns an action of type DECREMENT", () => {
    const action = decrement();
    expect(action).toEqual({ type: "DECREMENT" });
  });
  test("Returns an action of type ADD", () => {
    const action = add();
    expect(action).toEqual({ type: "ADD", payload: 5 });
  });
  test("Returns an action of type SUBTRACT", () => {
    const action = subtract();
    expect(action).toEqual({ type: "SUBTRACT", payload: 5 });
  });
  test("Returns an action of type STORE_RESULT", () => {
    const action = storeResult(-999);
    expect(action).toEqual({ type: "STORE_RESULT", result: -999 });
  });
  test("Returns an action of type DELETE_RESULT", () => {
    const action = deleteResult(-999);
    expect(action).toEqual({ type: "DELETE_RESULT", elemId: -999 });
  });
});
