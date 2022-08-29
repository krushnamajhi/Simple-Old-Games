import React from 'react';

const style = {
    background : 'lightgreen',
    border : '2px solid darkgreen',
    fontSize: '40px',
    fontWeight: '780',
    cursor: 'pointer',
    outline: 'none'
}

const crossStyle = {
    background : 'darkgreen',
    border : '2px solid darkgreen',
    fontSize: '42px',
    fontWeight: '1000',
    cursor: 'pointer',
    outline: 'none',
    color:'white'
}

function Square({onClick, value, cross}) {
    return (
        <button onClick={onClick} style = {cross? crossStyle : style}>
            {value}
        </button>
    );
}

export default Square;