import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from '../events';
import { StatusContext } from '../status';
import { Chat } from './chat';

export const Sprite = ({ type, size }) => {
    const [backgroundXPos, setBackgroundXPos] = useState(0);

    return (
        <div
            className={[type].join(' ')}
            style={{ backgroundPosition: `${backgroundXPos}px 0` }}
        ></div>
    );
};
