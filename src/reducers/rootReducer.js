import { combineReducers } from "redux";
import App from "./AppReducer";
import Game from "./GameReducer";

export default combineReducers({
  App,
  Game
});
