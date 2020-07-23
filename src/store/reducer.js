import * as actionTypes from "./actions";

const initialState = { counterValue: 0, results: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return { ...state, counterValue: state.counterValue + 1 };
    case actionTypes.DECREMENT:
      return { ...state, counterValue: state.counterValue - 1 };
    case actionTypes.ADD:
      return { ...state, counterValue: state.counterValue + action.payload };
    case actionTypes.SUBTRACT:
      return { ...state, counterValue: state.counterValue - action.payload };
    case actionTypes.STORE_RESULT:
      console.log("storing result...");
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counterValue,
        }),
      };
    case actionTypes.DELETE_RESULT:
      console.log("deleting result", action.elemId);
      return {
        ...state,
        results: state.results.filter((elem) => elem.id !== action.elemId),
      };
  }
  return state;
};

export default reducer;
