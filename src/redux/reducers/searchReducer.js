const initialState = {
  searchBarInput: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE_SEARCH":
      return {
        ...state,
        searchBarInput: action.payload,
      };
    default:
      return state;
  }
};

export default searchReducer;
