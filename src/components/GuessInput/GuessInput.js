import React from "react";

function GuessInput({ handleGuess }) {
  const [guess, setGuess] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ guess });
    handleGuess(guess);
    setGuess("");
  };

  const handleInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        onChange={handleInput}
        id="guess-input"
        value={guess}
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
