import React, { useEffect } from "react";
import { Player } from "./Player/Player";
import * as styles from "./LeaderBoard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { requestLeaderBoard } from "../../actions/AppAsyncActions";

const LeaderBoard = () => {
  const dispatch = useDispatch();
  const players = useSelector(state => state.App.liaderBoard);

  useEffect(() => {
    dispatch(requestLeaderBoard());
  }, [dispatch]);

  return (
    <section className={styles.LeaderBoard}>
      <h2>Leader Board</h2>
      <ul>
        {players.reverse().map((player, index) => (
          <Player key={index} {...player} />
        ))}
      </ul>
    </section>
  );
};

export default LeaderBoard;
