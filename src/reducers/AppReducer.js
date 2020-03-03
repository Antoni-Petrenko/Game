import constants from "../constants";

const { types, defaultState } = constants;

export default function App(state = defaultState.AppDefaultState, action) {
  switch (action.type) {
    case types.GET_GAME_SETTINGS: {
      return {
        ...state,
        levels: action.payload
      };
    }
    case types.CONNECTION_ERROR: {
      return {
        ...state,
        message: action.payload
      };
    }
    case types.GET_LEADER_BOARD: {
      return {
        ...state,
        liaderBoard: action.payload
      };
    }
    case types.SET_PLAYER_NAME: {
      return {
        ...state,
        player: action.payload
      };
    }
    case types.PLAYER_WIN: {
      return {
        ...state,
        message: `${state.player} win!`,
        winner: state.player
      };
    }

    case types.AI_WIN: {
      return {
        ...state,
        message: "AI win!",
        winner: "AI"
      };
    }
    case types.A_DRAW: {
      return {
        ...state,
        message: "draw! try again",
        winner: ""
      };
    }
    case types.POST_GAME_RESULT: {
      return {
        ...state,
        winner: ""
      };
    }

    default: {
      return {
        ...state
      };
    }
  }
}
