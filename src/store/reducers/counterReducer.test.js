import * as actionTypes from "../actions/actions";
import reducer from "./counterReducer";

test("Returns default initialState when no value is passed", () => {
  const newState = reducer(undefined, {});
  expect(newState).toEqual({ counterValue: 0 });
});

test("Increments counter when receiving an action of type 'INCREMENT'", () => {
  const newState = reducer(undefined, { type: actionTypes.INCREMENT });
  expect(newState).toEqual({ counterValue: 1 });
});

test("Decrements counter when receiving an action of type 'DECREMENT'", () => {
  const newState = reducer(undefined, { type: actionTypes.DECREMENT });
  expect(newState).toEqual({ counterValue: -1 });
});

test("Adds payload.value to counter when receiving an action of type 'ADD'", () => {
  const newState = reducer(undefined, { type: actionTypes.ADD, payload: 5 });
  expect(newState).toEqual({ counterValue: 5 });
});

test("Subtracts payload.value from counter when receiving an action of type 'SUBTRACT'", () => {
  const newState = reducer(undefined, { type: actionTypes.SUBTRACT, payload: 5 });
  expect(newState).toEqual({ counterValue: -5 });
});
