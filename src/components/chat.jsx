import React from 'react';

export const Chat = ({ message }) => (
    <div className="chat">
        <div>{ message }</div>
        <div className="chat__note">Press enter to continue...</div>
    </div>
)