import React, { useState } from "react";

export default function App19() {
  const [run, setRun] = useState(0);
  const [wicket, setWicket] = useState(0);
  const maxWickets = 10;
  const isGameOver = wicket >= maxWickets;

  const handleRun = () => {
    if (!isGameOver) {
      setRun(run + 1);
    }
  };

  const handleWicket = () => {
    if (!isGameOver) {
      setWicket(wicket + 1);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px", fontFamily: "Arial" }}>
      <h2>App19</h2>
      <h3>Assignment</h3>
      <h1 style={{ border: "2px solid black", padding: "10px" }}>
        Cricket Scoreboard
      </h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "50px", marginTop: "30px" }}>
        {/* Scoreboard */}
        <div style={{ border: "2px solid black", padding: "20px", borderRadius: "20px" }}>
          <h2>{run}</h2>
          <button onClick={handleRun} style={{ marginBottom: "20px" }}>Run</button>
          <h2>{wicket}</h2>
          <button onClick={handleWicket}>Wicket</button>
        </div>

        {/* Messages */}
        <div style={{ border: "2px solid black", padding: "20px", borderRadius: "20px" }}>
          <p><strong>Well Done!</strong></p>
          <p><strong>Better Luck Next Time!</strong></p>
          {isGameOver && <p style={{ color: "red", fontWeight: "bold" }}>Game Over!</p>}
        </div>
      </div>

      {/* Footer rule */}
      <p style={{ marginTop: "30px" }}>
        Wicket should go to max 10<br />
        If wicket is greater or equal to 10, then show Game Over!<br />
        Run should not be incremented once Game is over!
      </p>
    </div>
  );
}
