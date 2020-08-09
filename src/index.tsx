import React from "react";
import ReactDOM from "react-dom";
import Phaser from "phaser";
import { Game } from "react-phaser-fiber";
import Breakout from "./components/Breakout";
import { Canvas, EyeColors } from "./components/Canvas";
import "./styles.css";

const App = () => {
  return (
    <div>
      <Game
        width={800}
        height={800}
        physics={{
          default: "arcade"
        }}
        backgroundColor={EyeColors.BACKGROUND}
        scale={{
          mode: Phaser.Scale.FIT
        }}
      >
        <Breakout />
      </Game>
      <Canvas />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
