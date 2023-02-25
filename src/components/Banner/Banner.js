import React from "react";

function HappyBanner({ guesses }) {
  return (
    <div className="happy banner">
      <p>
        <strong>Congratulations!</strong> Got it in{" "}
        <strong>{guesses.length} guesses</strong>.
      </p>
    </div>
  );
}

function SadBanner({ answer }) {
  return (
    <div className="sad banner">
      <p>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </p>
    </div>
  );
}

function Banner({ type, guesses, answer }) {
  if (type === "happy") {
    return <HappyBanner guesses={guesses} />;
  }

  if (type === "sad") {
    return <SadBanner answer={answer} />;
  }

  return undefined;
}

export default Banner;
