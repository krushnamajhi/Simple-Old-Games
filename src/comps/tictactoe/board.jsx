import React from 'react';
import Square from './square';

const style = {
	border: "4px solid darkgreen",
	width: "350px",
	height: "350px",
	margin: "0 auto",
	display: "grid",
	gridTemplate: "repeat(3, 1fr) / repeat(3, 1fr)",
};

function Board({squares, onClick, line }) {
    return (
        <div style={style}>
           { squares.map((square, i) => (
                <Square key={i} value={square} cross = {line.includes(i)} onClick= {() => onClick(i)}/>
            ))}
        </div>
    );
}

export default Board;