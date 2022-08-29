import React, { useState } from "react";
import Board from "../comps/tictactoe/board";
import { calculateWinner } from "../utils/TictactoeUtils";
import Message from "../comps/message";
import HeadSetup from "../comps/HeadSetup";

const style = {
  width: "350px",
  margin: "20px auto",
};

function TicTacToe(props) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const result = calculateWinner(history[stepNumber])
  const winner = result[0];

  const handleClick = (i) => {
    const timeInHistory = history.slice(0, stepNumber + 1);
    const current = timeInHistory[stepNumber];
    const squares = [...current];
    //If User clicks the occupied square or game is won, return
    if (winner || squares[i]) return;
    //Put an X or an O in the clicked Square
    squares[i] = xIsNext ? "X" : "O";
    setHistory([...timeInHistory, squares]);
    setStepNumber(timeInHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step, clear = false) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
    if(clear)
      setHistory([Array(9).fill(null)])
  };

  const renderMoves = () => {
    return (
      <div className="p-1 text-center">
        <button className="btn btn-danger my-2 mx-1" style={{width:"47%"}} onClick={() => jumpTo(stepNumber - 1)} disabled = {stepNumber == 0}>Undo</button>
        <button className="btn btn-info my-2 mx-1" style={{width:"47%"}} onClick={() => jumpTo(stepNumber + 1)} disabled = {stepNumber == history.length -1}>Redo</button>
        <br/>
        <button className="btn btn-success my-2" style={{width:"98%"}} onClick={() => jumpTo(0, true)}>Go to Start</button>
      </div>
    );
  };

  return (
    <div>
      <HeadSetup title="Tic Tac Toe" header="Tic Tac Toe" />
      <center>
        <Message
          message={
            winner || !history[stepNumber].includes(null)
              ? 'Click "Go to Start" to start a new game'
              : "Next Player: " + (xIsNext ? "X" : "O")
          }
          error={false}
        />
        <h3 className="m-2" style={{height:"40px"}}>
          {winner
            ? "Winner is " + winner + "!!"
            : history[stepNumber].includes(null)
            ? ""
            : "Draw!!"}
        </h3>
      </center>
      <Board squares={history[stepNumber]} line={result[1]} onClick={handleClick} />
      <div style={style}>{renderMoves()}</div>
    </div>
  );
}

export default TicTacToe;
