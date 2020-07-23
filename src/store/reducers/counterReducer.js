import * as actionTypes from "../actions";

const initialState = { counterValue: 0 };

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
  }
  return state;
};

export default reducer;
