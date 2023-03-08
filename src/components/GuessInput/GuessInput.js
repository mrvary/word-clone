import React from "react";

function GuessInput({ handleGuess, disabled }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    console.log({ tentativeGuess });
    handleGuess(tentativeGuess);
    setTentativeGuess("");
  };

  const handleInput = (event) => {
    setTentativeGuess(event.target.value.toUpperCase());
  };

  return (
    <form className="guess-input-wrapper" onSubmit={onSubmit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={disabled}
        onChange={handleInput}
        id="guess-input"
        value={tentativeGuess}
        type="text"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
      />
    </form>
  );
}

export default GuessInput;
