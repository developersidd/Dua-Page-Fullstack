const { actions } = require("@/actions");

const { FETCHED_DUA, FETCHING_DUA, FETCHING_DUA_ERROR } = actions;
const initialState = {
  duas: [],
  loading: false,
  error: null,
};
const duaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DUA:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCHED_DUA:
      return {
        ...state,
        loading: false,
        duas: action.payload,
        error: null,
      };
    case FETCHING_DUA_ERROR:
      return {
        ...state,
        duas: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export { duaReducer, initialState };
