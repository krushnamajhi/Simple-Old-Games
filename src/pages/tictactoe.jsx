import React, { useState } from "react";
import Board from "../comps/tictactoe/board";
import { calculateWinner } from "../utils/TictactoeUtils";
import Message from "../comps/message"
import Link from 'next/link'


const style = {
  width: "200px",
  margin: "20px auto",
};

function TicTacToe(props) {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [xIsNext, setXIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);
  const winner = calculateWinner(history[stepNumber]);

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

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  const renderMoves = () =>
    history.map((_step, move) => {
      const destination = move ? "Go to move# " + move : "Go to Start";
      return (
        <div key={move} className="p-1">
          <li key={move}>
            <button key={move} className="btn btn-sm btn-success" onClick={() => jumpTo(move)}>{destination}</button>
          </li>
        </div>
      );
    });

  return (
    <div>
      <Link href="/">
      <button className="p-2 m-2 h4 btn btn-sm btn-primary">&larr; Go Back</button>
      </Link>
      <center>
        <h1>Tic Tac Toe</h1>
        <Message message = {winner
            ? "Winner is " + winner
            : "Next Player: " + (xIsNext ? "X" : "O")} error = {false}
            />
      </center>
      <Board squares={history[stepNumber]} onClick={handleClick} />
      <div style={style}>
        {renderMoves()}
      </div>
    </div>
  );
}

export default TicTacToe;
