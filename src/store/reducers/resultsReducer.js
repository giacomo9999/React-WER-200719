import * as actionTypes from "../actions/actions";

const initialState = { results: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: state.results.concat({
          id: new Date(),
          value: action.result,
        }),
      };
    case actionTypes.DELETE_RESULT:
      return {
        ...state,
        results: state.results.filter((elem) => elem.id !== action.elemId),
      };
  }
  return state;
};

export default reducer;
