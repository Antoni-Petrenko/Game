import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { requestGameSettings } from "../../actions/AppAsyncActions";
import { GameField } from "./GameField/GameField";
import { Message } from "./Message/Message";
import { PlayerSetup } from "./PlayerSetup/PlayerSetup";
import * as styles from "./Game.module.css";

const Game = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestGameSettings());
  }, [dispatch]);

  return (
    <section className={styles.Game}>
      <PlayerSetup />
      <Message />
      <GameField />
    </section>
  );
};

export default Game;
