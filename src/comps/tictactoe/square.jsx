import React from 'react';

const style = {
    background : 'lightgreen',
    border : '2px solid darkgreen',
    fontSize: '50px',
    fontWeight: '800',
    cursor: 'pointer',
    outline: 'none'
}

function Square({onClick, value}) {
    return (
        <button onClick={onClick} style = {style}>
            {value}
        </button>
    );
}

export default Square;