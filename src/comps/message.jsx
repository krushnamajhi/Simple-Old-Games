import React from 'react';

function Message(props) {

    const { message, error } = props

    return (
        <div className='p-3'>
            <span className={error?"text-danger":"text-success"}>{message}</span>
        </div>
    );
}

export default Message;