import React from "react";
import { useSelector } from "react-redux";
import { Cell } from "./Cell/Cell";
import * as styles from "./GameField.module.css";

const GameField = () => {
  const fields = useSelector(state => state.Game.field.length);
  const singelFieldSize = 50;
  const fieldSideSize = Math.sqrt(fields) * singelFieldSize;
  const style = {
    width: fieldSideSize,
    height: fieldSideSize
  };

  return (
    <div className={styles.GameField} style={style}>
      {Array(fields)
        .fill(0)
        .map((cell, index) => (
          <Cell key={index} id={index} />
        ))}
    </div>
  );
};

export { GameField };
