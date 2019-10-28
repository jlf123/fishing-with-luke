import React, { useState, useEffect } from 'react';
import { Spinner } from './spinner';
import { hooks } from '../hooks';

export const Modal = ({ close }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [activeHook, setActiveHook] = useState();
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);
    return (
        <div className="modal-container">
            {isLoading ? (
                <Spinner />
            ) : (
                <React.Fragment>
                    <div className="modal__heading">
                        Select a hook to fish with
                    </div>
                    <div className="modal__body">
                        <div className="hooks-container">
                            {hooks.map(({ name }) => (
                                <div
                                    onClick={() => setActiveHook(name)}
                                    className={[
                                        'hook',
                                        activeHook === name ? 'active' : ''
                                    ].join(' ')}
                                >
                                    <div
                                        className={`hook__img hook__img--${name}`}
                                    ></div>
                                    <div className="hook__title">{name}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="modal__footer">
                        { activeHook && <button className="btn">Buy</button>}
                        <button className="btn" onClick={close}>
                            Close
                        </button>
                    </div>
                </React.Fragment>
            )}
        </div>
    );
};
