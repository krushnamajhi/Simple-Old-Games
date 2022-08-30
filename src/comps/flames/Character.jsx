import React from 'react';

const style = {
	border: "2px solid darkgreen",
	borderRadius: "1px",
    fontWeight: '700',
};

const crossedStyle = {
    border: "2px solid darkgreen",
	borderRadius: "1px",
    background : 'lightgreen',
    color : "black",
    fontWeight: '700',

}

function Character({ch, iscrossed}) {
    return (
           <span className='h5 mx-1 my-2 px-2 btn' style={iscrossed?crossedStyle : style}>{ch}</span> 
    );
}

export default Character;