const initialState = { counterValue: 0, results: [] };

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
    case "STORE_RESULT":
      console.log("storing result...");
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: state.counterValue,
        }),
      };
    case "DELETE_RESULT":
      console.log("deleting result", action.elemId);
      return {
        ...state,
        results: state.results.filter((elem) => elem.id !== action.elemId),
      };
  }
  return state;
};

export default reducer;
