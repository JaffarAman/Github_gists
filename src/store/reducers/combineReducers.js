import { combineReducers } from "redux";
import { SearchGistsReducer, GistsDetailReducer } from "./gistReducers";

const reducers = combineReducers({
  SearchGistsReducer,
  GistsDetailReducer,
});

export default reducers;
