import React from "react";

function GuessInput() {
  const [guess, setGuess] = React.useState("");

  const handleInput = (event) => {
    setGuess(event.target.value.toUpperCase());
  };

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        console.log({ guess });
        setGuess("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        onChange={handleInput}
        id="guess-input"
        value={guess}
        type="text"
        pattern="[a-zA-Z]{5,5}"
      />
    </form>
  );
}

export default GuessInput;
