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
  // running | won | lost
  const [gameStatus, setGameStatus] = React.useState("running");

  const handleGuess = (tentativeGuess) => {
    if (tentativeGuess === answer) {
      setGameStatus("won");
    }
    if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setGameStatus("lost");
    }
    setGuesses([...guesses, tentativeGuess]);
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer}></GuessResults>
      <GuessInput
        handleGuess={handleGuess}
        disabled={gameStatus !== "running"}
      ></GuessInput>
      {gameStatus !== "running" && (
        <Banner
          answer={answer}
          guesses={guesses}
          type={gameStatus === "won" ? "happy" : "sad"}
        />
      )}
    </>
  );
}

export default Game;
