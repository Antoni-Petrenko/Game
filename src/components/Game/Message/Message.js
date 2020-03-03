import React from "react";
import { useSelector } from "react-redux";
import * as styles from "./Message.module.css";

const Message = () => {
  const message = useSelector(state => state.App.message);
  return (
    <div className={styles.Message}>
      <p
        style={
          message.includes("AI") || message.includes("internet")
            ? { color: "#e85a5f" }
            : null
        }
      >
        {message}
      </p>
    </div>
  );
};

export { Message };
