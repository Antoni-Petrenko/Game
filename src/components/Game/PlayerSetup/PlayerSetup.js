import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startGame,
  drawGameField,
  savePlayerName,
  generateField
} from "../../../actions/ActionsCreators";
import * as styles from "./PlayerSetup.module.css";

const PlayerSetup = () => {
  const dispatch = useDispatch();
  const levelsList = useSelector(state => state.App.levels);
  const isFirstGame = useSelector(state => state.Game.isFirstGame);
  const gameIsOn = useSelector(state => state.Game.gameIsOn);
  const defaultSettings = useSelector(state => state.App.defaultSettings);

  useEffect(() => {
    if (gameIsOn) {
      dispatch(generateField());
    }
  }, [gameIsOn, dispatch]);

  useEffect(() => {
    dispatch(drawGameField(defaultSettings));
  }, [dispatch, defaultSettings]);

  const difficultyNames = Object.keys(levelsList);

  const [playerName, setName] = useState("");
  const [isDifficultyChoiced, choiceDifficulty] = useState(false);
  const handlers = {
    select: e => {
      if (e.target.value) {
        choiceDifficulty(true);
        dispatch(drawGameField(levelsList[e.target.value]));
      } else {
        choiceDifficulty(false);
      }
    },
    input: e => {
      setName(e.target.value);
    },
    submit: e => {
      e.preventDefault();
      dispatch(savePlayerName(playerName));
      dispatch(startGame());
    }
  };
  return (
    <form className={styles.Form} onSubmit={handlers.submit}>
      <select
        className={styles.Select}
        id="gameMode"
        onChange={handlers.select}
        disabled={gameIsOn}
      >
        <option value="">Pick game mode</option>
        {difficultyNames.map((name, index) => (
          <option key={index} value={name}>
            {name.replace("Mode", "")}
          </option>
        ))}
      </select>
      <input
        className={styles.Input}
        type="text"
        placeholder="Enter your name"
        value={playerName}
        onChange={handlers.input}
        required
        disabled={gameIsOn}
      />
      <button
        className={styles.Button}
        disabled={gameIsOn !== !isDifficultyChoiced}
      >
        {isFirstGame ? "play" : "play again"}
      </button>
    </form>
  );
};

export { PlayerSetup };
