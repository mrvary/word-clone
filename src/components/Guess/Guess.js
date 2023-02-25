import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ value, answer }) {
  if (!value) {
    return (
      <p className="guess">
        {range(5).map((num) => (
          <span key={num} className="cell"></span>
        ))}
      </p>
    );
  }

  const checkedGuess = checkGuess(value, answer);

  return (
    <p className="guess">
      {checkedGuess.map(({ letter, status }, index) => (
        <span key={index} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
