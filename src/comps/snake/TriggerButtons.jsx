import React, { useEffect, useState } from "react";

function TriggerButtons({ startGame, pauseGame, resumeGame, pause, started }) {

  function startGameButton(restart = false) {
    return (
        <>
      <button className="btn btn-success m-3" onClick={startGame}>
        {restart? "Restart Game" : "Start Game"}
      </button>
      </>
    );
  }

  function pauseGameButton() {
    return (
        <>
      <button className="btn btn-danger m-3" onClick={pauseGame}>
        Pause
      </button>
      </>
    );
  }

  function resumeGameButton() {
    return (
        <>
      <button className="btn btn-primary m-3" onClick={resumeGame}>
        Resume
      </button>
      { startGameButton(true) }
      </>
    );
  }

  return (
    <div>
      { pause && started
        ? resumeGameButton()
        : !started
        ? startGameButton()
        : pauseGameButton()}
    </div>
  );
}

export default TriggerButtons;
