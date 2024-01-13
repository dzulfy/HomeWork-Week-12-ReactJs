import React, { useState } from "react";
import Board from "./Board";

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
};

// ...

const Game = () => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const handleClick = (i) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const currentSquares = currentHistory[stepNumber].squares.slice();

    if (calculateWinner(currentSquares) || currentSquares[i]) {
      return;
    }

    currentSquares[i] = xIsNext ? "X" : "O";

    setHistory(currentHistory.concat([{ squares: currentSquares }]));
    setStepNumber(currentHistory.length);
    setXIsNext(!xIsNext);
  };

  const restart = () => {
    setHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXIsNext(true);
  };

  const currentSquares = history[stepNumber].squares;

  const winner = calculateWinner(currentSquares);

  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="mb-4">{status}</div>
      <div className="mb-4">
        <Board squares={currentSquares} onClick={handleClick} />
      </div>
      <div className="text-center">
        <button
          onClick={restart}
          className="bg-blue-500 text-white p-2 rounded-md"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default Game;
