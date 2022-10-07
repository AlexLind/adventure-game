import { useState } from "react";
import { Route, Routes, Link, useNavigate } from "react-router-dom";

function Monster(props) {
  const { treasureCount, setTreasureCount, highscore, setHighscore, setLives, lives } = props;
  const [gameOver, setGameOver] = useState(false)
  const navigate = useNavigate();

  const tryAgain = () => {
    console.log("Try Again clicked")
    if (treasureCount > highscore) {
        setHighscore(treasureCount);
    }
    setLives(9)
    setTreasureCount(0)
    navigate("/")
  }


  const fightAction = () => {
    const diceRoll = Math.random();
    console.log(diceRoll);
    if (diceRoll > 0.5) { // This needs to be dynamic based on creature
        setTreasureCount((prev) => prev + 1);
    }
    setLives((prev) => prev - 1);
    if (lives === 1) {
        setGameOver(true)
    }
  };

  const bluffAction = () => {
    const diceRoll = Math.random();
    console.log(diceRoll);
    if (diceRoll > 0.3) {
      setTreasureCount((prev) => prev + 1);
    }
    setLives((prev) => prev - 1);
    if (lives === 1) {
        console.log('Game over');
        setGameOver(true)
    }
  };

  return (
    (
    !gameOver
    ? <>
          <h1>Monster</h1>
          <button onClick={fightAction}>Fight</button>
          <button onClick={bluffAction}>Bluff</button>
        </>
    : <>
    <h1>Game over!</h1>
        <button onClick={tryAgain}>Try Again?</button>
    </>
    )
  );
}

export default Monster;
