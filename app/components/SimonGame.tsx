
"use client";

import { useEffect, useState } from "react";
import "./SimonGame.css";

const buttonColors = ["red", "blue", "green", "yellow"];

export default function SimonGame() {
  const [gamePattern, setGamePattern] = useState<string[]>([]);
  const [userClickedPattern, setUserClickedPattern] = useState<string[]>([]);
  const [level, setLevel] = useState(0);
  const [started, setStarted] = useState(false);
  const [pressedColor, setPressedColor] = useState("");
  const [gameOver, setGameOver] = useState(false);

  const startGame = () => {
    if (!started) {
      setStarted(true);
      nextSequence([]);
    }
  };

  useEffect(() => {
    const handleKeyDown = () => startGame();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [started]);

  const playSound = (name: string) => {
    const audio = new Audio(`/sounds/${name}.mp3`);
    audio.play().catch(() => {});
  };

  const animatePress = (color: string) => {
    setPressedColor(color);

    setTimeout(() => {
      setPressedColor("");
    }, 150);
  };

  const nextSequence = (currentPattern: string[] = gamePattern) => {
    setUserClickedPattern([]);

    const randomNumber = Math.floor(Math.random() * 4);
    const randomChosenColour = buttonColors[randomNumber];

    const newPattern = [...currentPattern, randomChosenColour];

    setGamePattern(newPattern);
    setLevel(newPattern.length);

    animatePress(randomChosenColour);
    playSound(randomChosenColour);
  };

  const startOver = () => {
    setLevel(0);
    setGamePattern([]);
    setUserClickedPattern([]);
    setStarted(false);
  };

  const handleClick = (color: string) => {
    if (!started) return;

    const newUserPattern = [...userClickedPattern, color];

    setUserClickedPattern(newUserPattern);

    playSound(color);
    animatePress(color);

    const currentIndex = newUserPattern.length - 1;

    if (gamePattern[currentIndex] === newUserPattern[currentIndex]) {
      if (newUserPattern.length === gamePattern.length) {
        setTimeout(() => {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");

      setGameOver(true);

      setTimeout(() => {
        setGameOver(false);
      }, 200);

      startOver();
    }
  };

  return (
    <div className={gameOver ? "game-over" : ""}>
      <h1 id="level-title">
        {started
          ? `Level ${level}`
          : "Tap Or Press Any Key To Start"}
      </h1>

      {!started && (
        <button
          className="start-btn"
          onClick={startGame}
        >
          Start Game
        </button>
      )}

      <div className="container">
        <div className="row">
          <div
            id="green"
            className={`btn green ${
              pressedColor === "green" ? "pressed" : ""
            }`}
            onClick={() => handleClick("green")}
          />

          <div
            id="red"
            className={`btn red ${
              pressedColor === "red" ? "pressed" : ""
            }`}
            onClick={() => handleClick("red")}
          />
        </div>

        <div className="row">
          <div
            id="yellow"
            className={`btn yellow ${
              pressedColor === "yellow" ? "pressed" : ""
            }`}
            onClick={() => handleClick("yellow")}
          />

          <div
            id="blue"
            className={`btn blue ${
              pressedColor === "blue" ? "pressed" : ""
            }`}
            onClick={() => handleClick("blue")}
          />
        </div>
      </div>
    </div>
  );
}
