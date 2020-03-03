import constants from "../constants";

const { types, defaultState } = constants;

export default function Game(state = defaultState.GameDefaultState, action) {
  switch (action.type) {
    case types.TO_DRAW_FIELD: {
      const field = Array(Math.pow(action.payload.field, 2))
        .fill(0)
        .map((el, index) => ({
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
        const resetFields = state.field.map(field => {
          field.whoseField = "none";
          return field;
        });
        return {
          ...state,
          field: resetFields,
          gameIsOn: true
        };
      }
      return {
        ...state,
        gameIsOn: true
      };
    }

    case types.GENERATE_RANDOM_FIELD: {
      const randomID = (({ field, filledFields }) => {
        for (let i = 0; i <= field.length; i++) {
          const randID = Math.round(Math.random() * (field.length - 1));
          if (!filledFields.includes(randID)) {
            return randID;
          }
        }
      })(state);

      const filledFields = [...state.filledFields, randomID];

      const field = state.field.map(field => {
        if (field.id === randomID) {
          field.isActive = true;
        }
        return field;
      });

      return {
        ...state,
        field,
        filledFields
      };
    }
    case types.MAKE_CHOICE: {
      const field = state.field.map(field => {
        if (field.id === action.payload.fieldID) {
          field.whoseField = action.payload.whoClicked;
          field.isActive = false;
        }
        return field;
      });
      const AIPoints = field.filter(field => field.whoseField === "AI").length;
      const PlayerPoints = field.filter(field => field.whoseField === "Player")
        .length;
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
        filledFields: [],
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
