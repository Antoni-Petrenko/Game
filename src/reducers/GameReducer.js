import constants from "../constants";

const { types, defaultState } = constants;

export default function Game(state = defaultState.GameDefaultState, action) {
  switch (action.type) {
    case types.TO_DRAW_FIELD: {
      const field = Array(Math.pow(action.payload.field, 2))
        .fill(0)
        .map((cell, index) => ({
          id: index,
          isActive: false,
          whoseField: "none"
        }));
      return {
        ...state,
        field,
        delay: action.payload.delay
      };
    }

    case types.START_GAME: {
      if (!state.isFirstGame) {
        const resetField = state.field.map(field => {
          field.whoseField = "none";
          return field;
        });
        return {
          ...state,
          field: resetField,
          gameIsOn: true
        };
      }
      return {
        ...state,
        gameIsOn: true
      };
    }

    case types.GENERATE_RANDOM_CELL: {
      const randomID = (({ field, filledCells }) => {
        for (let i = 0; i <= field.length; i++) {
          const randID = Math.round(Math.random() * (field.length - 1));
          if (!filledCells.includes(randID)) {
            return randID;
          }
        }
      })(state);

      const filledCells = [...state.filledCells, randomID];

      const field = state.field.map(cell => {
        if (cell.id === randomID) {
          cell.isActive = true;
        }
        return cell;
      });

      return {
        ...state,
        field,
        filledCells
      };
    }
    case types.MAKE_CHOICE: {
      const field = state.field.map(cell => {
        if (cell.id === action.payload.cellID) {
          cell.whoseField = action.payload.whoClicked;
          cell.isActive = false;
        }
        return cell;
      });
      const AIPoints = field.filter(cell => cell.whoseField === "AI").length;
      const PlayerPoints = field.filter(cell  => cell.whoseField === "Player").length;
      return {
        ...state,
        field,
        AIPoints,
        PlayerPoints
      };
    }
    case types.FINISH_GAME: {
      return {
        ...state,
        filledCells: [],
        gameIsOn: false,
        isFirstGame: false
      };
    }
    default: {
      return {
        ...state
      };
    }
  }
}
