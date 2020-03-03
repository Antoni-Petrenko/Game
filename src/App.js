import React from "react";
import Game from "./components/Game/";
import LeaderBoard from "./components/LeaderBoard";
import * as styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrapper}>
      <Game />
      <LeaderBoard />
    </div>
  );
}

export default App;
