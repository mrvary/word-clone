import React from "react";
import GuessInput from "../GuessInput";
import GuessResults from "../GuessResults";
import Banner from "../Banner";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";
import { sample } from "../../utils";
import { WORDS } from "../../data";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [guessedCorrectly, setGuessedCorrectly] = React.useState(false);
  const [gameOver, setGameOver] = React.useState(false);

  const handleGuess = (tentativeGuess) => {
    if (tentativeGuess === answer) {
      setGuessedCorrectly(true);
      setGameOver(true);
    }
    if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameOver(true);
    }
    setGuesses([...guesses, tentativeGuess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput handleGuess={handleGuess} gameOver={gameOver}></GuessInput>
      {gameOver && (
        <Banner
          answer={answer}
          guesses={guesses}
          type={guessedCorrectly ? "happy" : "sad"}
        />
      )}
    </>
  );
}

export default Game;
