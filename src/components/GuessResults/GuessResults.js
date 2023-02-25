import React from "react";
import { range } from "../../utils.js";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants.js";

import Guess from "../Guess";

function GuessResults({ guesses }) {
  const rows = [
    ...guesses,
    ...range(NUM_OF_GUESSES_ALLOWED).map((_) => ""),
  ].slice(0, 6);

  return (
    <div className="guess-results">
      {rows.map((guess, index) => (
        <Guess key={index} guess={guess} />
      ))}
    </div>
  );
}

export default GuessResults;
