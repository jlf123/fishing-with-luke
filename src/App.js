import React, { useEffect, useState, useRef } from 'react';
import { EventContext, events as availableEvents } from './events';
import { StatusContext } from './status';
import { Sprite } from './components/sprite';
import { Modal } from './components/modal';
import './App.scss';

const App = () => {
    const [eventsQueue, setEventsQueue] = useState(availableEvents);
    const [spriteStatuses, setSpriteStatuses] = useState({
        zombie: 'active',
        person: 'active'
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const worldRef = useRef(null);

    const updateEventsQueue = () => {
        setEventsQueue(eventsQueue =>
            eventsQueue.length === 1 ? [{}] : eventsQueue.splice(1)
        );
    };

    const updateSpriteStatus = (sprite, status) => {
        setSpriteStatuses({ ...spriteStatuses, [sprite]: status });
    };

    useEffect(() => {
        document.addEventListener('keypress', event => {
            if (event.keyCode === 13) {
                updateEventsQueue();
            }
        });
    }, []);
    return (
        <EventContext.Provider
            value={{ events: eventsQueue, nextEvent: updateEventsQueue }}
        >
            <StatusContext.Provider
                value={{ spriteStatuses, updateSpriteStatus }}
            >
                <div className="world" ref={worldRef}>
                    <div className="heading">
                        <h1 className="title">Fishing With Luke</h1>
                        <button
                            className="btn"
                            onClick={() => {
                                setIsModalOpen(true);
                                worldRef.current.classList.add('backdrop');
                            }}
                        >
                            Shop
                        </button>
                    </div>
                    {isModalOpen && (
                        <Modal
                            close={() => {
                                setIsModalOpen(false);
                                worldRef.current.classList.remove('backdrop');
                            }}
                        />
                    )}
                    <Sprite type="zombie" size={150} />
                    <Sprite type="person" size={82} />
                    <div className="floor">
                        <div className="dock"></div>
                        <div className="ocean"></div>
                    </div>
                </div>
            </StatusContext.Provider>
        </EventContext.Provider>
    );
};

export default App;
