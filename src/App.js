import React, { useEffect, useState, useRef } from 'react';
import { EventContext, events as availableEvents } from './events';
import { StatusContext } from './status';
import { Sprite } from './components/sprite';
import { Modal } from './components/modal';
import './App.scss';

const App = () => {
    useEffect(() => {
        document.addEventListener('keypress', event => {
            if (event.keyCode === 13) {
            }
        });
    }, []);
    return (
        <div className="world">
            <div className="heading">
                <h1 className="title">Fishing With Luke</h1>
                <button className="btn" onClick={() => {}}>
                    Shop
                </button>
            </div>
            <Sprite type="zombie" size={150} />
            <Sprite type="person" size={82} />
            <div className="floor">
                <div className="dock"></div>
                <div className="ocean"></div>
            </div>
        </div>
    );
};

export default App;
