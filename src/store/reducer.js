const initialState = { counterValue: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counterValue: state.counterValue + 1 };
    case "DECREMENT":
      return { ...state, counterValue: state.counterValue - 1 };
    case "ADD":
      return { ...state, counterValue: state.counterValue + action.payload };
    case "SUBTRACT":
      return { ...state, counterValue: state.counterValue - action.payload };
  }
  return state;
};

export default reducer;
