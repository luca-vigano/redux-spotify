import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";
import mediaPlayerReducer from "../reducers/mediaPlayerReducer";

const BigReducer = combineReducers({
  mediaPlayerReducer: mediaPlayerReducer,
  searchBarInput: searchReducer,
});

const store = configureStore({
  reducer: BigReducer,
});

export default store;
