import { configureStore, combineReducers } from "@reduxjs/toolkit";
import searchReducer from "../reducers/searchReducer";

const BigReducer = combineReducers({
  //   favorite: favoriteReducer,
  searchBarInput: searchReducer,
});

const store = configureStore({
  reducer: BigReducer,
});

export default store;
