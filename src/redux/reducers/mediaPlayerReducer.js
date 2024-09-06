import { SET_SONG } from "../action";

const initialState = {
  searchBarInput: "",
};

const mediaPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SONG:
      return {
        ...state,
        searchBarInput: action.payload,
      };
    default:
      return state;
  }
};

export default mediaPlayerReducer;
