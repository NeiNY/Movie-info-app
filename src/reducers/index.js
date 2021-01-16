import { combineReducers } from "redux";
import appReducer from "./appReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  movies: searchReducer,
  app: appReducer,
});
