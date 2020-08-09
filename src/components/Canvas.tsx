import React, { ReactElement, useRef, useEffect } from "react";
import json from "../breakout.json";

type Sprite = {
  frame: {
    x: number;
    y: number;
    w: number;
    h: number;
  };
};

type JSON = {
  frames: {
    [name: string]: Sprite;
  };
  meta: {
    size: {
      w: number;
      h: number;
    };
  };
};

export const EyeColors = {
  BACKGROUND: "#FFFFFF", //"#FBD604",
  BALL: "#FF00FF",
  PADDLE: "#00FFFF",
  BLOCKS: "black"
};

export const Colors = {
  blue: EyeColors.BLOCKS, //"#4ABFF0",
  green: EyeColors.BLOCKS, //"green",
  purple: EyeColors.BLOCKS, //"purple",
  red: EyeColors.BLOCKS,
  silver: EyeColors.BLOCKS, //"silver",
  yellow: EyeColors.BLOCKS, //"yellow",
  ball1: EyeColors.BALL, //"orange",
  ball2: EyeColors.BALL, //"black",
  button: "magenta",
  buttonOver: "cyan",
  particle: "salmon",
  paddle1: EyeColors.PADDLE, //"blue",
  paddle2: EyeColors.PADDLE //"darkblue",
};

export const HardColors = {
  blue: EyeColors.PADDLE, //"#4ABFF0",
  green: EyeColors.PADDLE, //"green",
  purple: EyeColors.BALL, //"purple",
  red: EyeColors.BALL,
  silver: EyeColors.PADDLE, //"silver",
  yellow: EyeColors.BALL, //"yellow",
  ball1: EyeColors.BALL, //"orange",
  ball2: EyeColors.BALL, //"black",
  button: "magenta",
  buttonOver: "cyan",
  particle: "salmon",
  paddle1: EyeColors.PADDLE, //"blue",
  paddle2: EyeColors.PADDLE //"darkblue",
};

export const Canvas = (): ReactElement => {
  const canvas = useRef<HTMLCanvasElement>(null);
  const { frames, meta } = json as JSON;

  useEffect(() => {
    if (canvas.current) {
      const context = canvas.current.getContext(
        "2d"
      ) as CanvasRenderingContext2D;
      for (let [name, { frame }] of Object.entries(frames)) {
        const entry = Object.entries(Colors).find(([n]) => {
          return name === n || name.match(n);
        }) as [string, string];
        const [, color] = entry;

        const { x, y, w, h } = frame;
        context.strokeStyle = EyeColors.BACKGROUND;
        context.moveTo(x, y);
        context.lineTo(x + w, y);
        context.stroke();
        context.lineTo(x + w, y + h);
        context.stroke();
        context.lineTo(x, y + h);
        context.stroke();
        context.lineTo(x, y);
        context.stroke();
        context.fillStyle = color;
        context.fillRect(x, y, w, h);
      }
    }
  }, []);
  return (
    <canvas
      style={{ display: "none" }}
      ref={canvas}
      height={meta.size.h}
      width={meta.size.w}
    />
  );
};
