import * as actionTypes from "../actions/actions";
import reducer from "./resultsReducer";

test("Returns default initialState when no value is passed", () => {
  const newState = reducer(undefined, {});
  expect(newState).toEqual({ results: [] });
});

test("Adds element to list when receiving an action of type 'STORE_RESULT'", () => {
  const newState = reducer(undefined, {
    type: actionTypes.STORE_RESULT,
    result: -999,
  });
  const newDate = new Date();
  expect(newState).toEqual({
    results: [
      {
        id: newDate,
        value: -999,
      },
    ],
  });
});

test("Removes element from list when receiving an action of type 'DELETE_RESULT'", () => {
  const testId = new Date();
  const testState = {
    results: [
      {
        id: testId,
        value: -999,
      },
    ],
  };
  const newState = reducer(testState, {
    type: actionTypes.DELETE_RESULT,
    elemId: testId,
  });
  expect(newState.results.length).toEqual(0);
});
