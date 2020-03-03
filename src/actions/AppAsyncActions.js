import {
  getGameSettingsSuccess,
  getGameSettingsFailure,
  getLeaderBoardSuccess,
  getLeaderBoardFailure,
  postGameResultFailure,
} from "./ActionsCreators";

import getDate from "./Date";

export const requestGameSettings = () => {
  return async dispatch => {
    try {
      const request = await fetch(
        "https://starnavi-frontend-test-task.herokuapp.com/game-settings"
      );
      const data = await request.json();
      dispatch(getGameSettingsSuccess(data));
    } catch {
      dispatch(getGameSettingsFailure());
    }
  };
};

export const requestLeaderBoard = () => {
  return async dispatch => {
    try {
      
      const response = await fetch(
        "https://starnavi-frontend-test-task.herokuapp.com/winners"
      );
      const data = await response.json();
      dispatch(getLeaderBoardSuccess(data));
    } catch {
      dispatch(getLeaderBoardFailure());
    }
  };
};

export const postGameResult = () => {
  return async (dispatch,getState)  => {
    try {
      const {App} = getState();
      const response = await fetch("https://starnavi-frontend-test-task.herokuapp.com/winners", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ winner:App.winner, date: getDate() })
      });
      if(response.ok){
        dispatch(requestLeaderBoard())
      }
      
    } catch {
      dispatch(postGameResultFailure());
    }
  };
};


