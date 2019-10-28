import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from '../events';
import { StatusContext } from '../status';

export const Sprite = ({ type, size }) => {
    const [backgroundXPos, setBackgroundXPos] = useState(0);
    const {
        events: [{ sprite, eventType, payload }],
        nextEvent
    } = useContext(EventContext);

    const { spriteStatuses, updateSpriteStatus } = useContext(StatusContext);

    const spriteActive = sprite === type;
    const spriteMoving = spriteActive && eventType === 'move';

    useEffect(() => {
        if (sprite === type && eventType === 'move') {
            const intervalId = setInterval(() => {
                setBackgroundXPos(backgroundXPos =>
                    backgroundXPos > 600 ? 0 : backgroundXPos + size
                );
            }, 200);

            setTimeout(() => {
                clearInterval(intervalId);
                nextEvent();
            }, payload.duration);
        }
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [spriteMoving]);

    if (spriteStatuses[type] === 'destroyed') return null;

    if (spriteActive && eventType === 'destroy') {
        updateSpriteStatus(type, 'destroyed');
        nextEvent();
    }

    return (
        <div
            className={[
                type,
                sprite === type && eventType === 'move' ? payload.movement : ''
            ].join(' ')}
            style={{ backgroundPosition: `${backgroundXPos}px 0` }}
        >
            {sprite === type && eventType === 'chat' && (
                <div className="chat">
                    <div>{ payload.message }</div>
                    <div className="chat__note">Press enter to continue...</div>
                </div>
            )}
        </div>
    );
};
