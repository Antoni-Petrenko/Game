export const AppDefaultState = {
  levels: {},
  player: "",
  defaultSettings: { delay: 2000, field: 5 },
  winner: "",
  liaderBoard: [],
  message: ""
};

export const GameDefaultState = {
  AIPoints: 0,
  PlayerPoints: 0,
  filledCells: [],
  field: [],
  delay: 0,
  gameIsOn: false,
  isFirstGame: true
};
