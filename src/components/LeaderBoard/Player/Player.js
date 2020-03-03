import React from "react";
import * as styles from "./Player.module.css";

const Player = ({ winner, date }) => {
  return (
    <li className={styles.PlayerItem}>
      <span>{winner}</span>
      <span>{date}</span>
    </li>
  );
};

export { Player };
