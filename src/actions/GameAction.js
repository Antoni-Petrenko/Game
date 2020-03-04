import {
  makeChoice,
  finishGame,
  generateCell,
  checkWiner
} from "./ActionsCreators";
import { postGameResult } from "./AppAsyncActions";

export const choice = (fieldID, whoClicked) => {
  return (dispatch, getState) => {
    dispatch(makeChoice(fieldID, whoClicked));
    const { Game } = getState();
    if (checkWiner(Game)) {
      dispatch(checkWiner(Game));
      dispatch(finishGame());
      dispatch(postGameResult());
    } else {
      dispatch(generateCell());
    }
  };
};
