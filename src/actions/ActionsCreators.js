import constants from "../constants/";

const { types } = constants;

export const getGameSettingsSuccess = data => ({
  type: types.GET_GAME_SETTINGS,
  payload: data
});

export const getGameSettingsFailure = () => ({
  type: types.CONNECTION_ERROR,
  payload: "Check your internet connection"
});

export const savePlayerName = name => ({
  type: types.SET_PLAYER_NAME,
  payload: name
});

export const getLeaderBoardSuccess = data => ({
  type: types.GET_LEADER_BOARD,
  payload: data
});

export const getLeaderBoardFailure = () => ({
  type: types.CONNECTION_ERROR,
  payload: "Check your internet connection"
});

export const postGameResult=()=>({
  type: types.CONNECTION_ERROR
}) 
export const postGameResultFailure=()=>({
    type: types.CONNECTION_ERROR,
    payload: "Check your internet connection"
}) 

export const startGame = () => ({
  type: types.START_GAME
});

export const drawGameField = settings => ({
  type: types.TO_DRAW_FIELD,
  payload: settings
});

export const generateField = () => ({
  type: types.GENERATE_RANDOM_FIELD
});

export const makeChoice =(fieldID, whoClicked)=> ({
  type: types.MAKE_CHOICE,
  payload: {
    fieldID, whoClicked
  }
});

export const finishGame = () => ({
  type: types.FINISH_GAME
});

export const checkWiner = ({ AIPoints, PlayerPoints, field}) => {
  const possibleFields = field.length;
  if (AIPoints > possibleFields * 0.5) {
    return {
      type: types.AI_WIN,
    };
  } else if (PlayerPoints > possibleFields * 0.5) {
    return {
      type: types.PLAYER_WIN,
    }
  } else if (
    (PlayerPoints + AIPoints === field.length) &
    (PlayerPoints === AIPoints)
  ) {
    return {
      type: types.A_DRAW
    }
  }
  return false;
};
