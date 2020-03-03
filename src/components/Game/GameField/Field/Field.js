import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { choice } from "../../../../actions/GameAction";
import * as styles from "./Field.module.css";

const Field = ({ id }) => {
  const delay = useSelector(state => state.Game.delay);
  const isActive = useSelector(state => state.Game.field[id].isActive);
  const whoseField = useSelector(state => state.Game.field[id].whoseField);
  const dispatch = useDispatch();

  let timer;
  if (isActive) {
    timer = setTimeout(() => {
      dispatch(choice(id, "AI"));
    }, delay);
  }
  const className = [styles.Field];

  if (isActive) {
    className.push(styles.Active);
  }

  if (whoseField === "Player") {
    className.push(styles.Player);
  } else if (whoseField === "AI") {
    className.push(styles.AI);
  }

  const handlerClick = () => {
    if (isActive) {
      clearTimeout(timer);
      dispatch(choice(id, "Player"));
    }
  };
  return <div className={className.join(" ")} onClick={handlerClick}></div>;
};

export { Field };
