import React, { useState, useEffect } from 'react';
import { Spinner } from './spinner';
import { hooks } from '../hooks';

export const Modal = ({ close, onLoad }) => {
    useEffect(() => {
        onLoad();
    }, []);
    return (
        <div className="modal-container">
            <React.Fragment>
                <div className="modal__heading">Select a hook to fish with</div>
                <div className="modal__body">
                    <div className="hooks-container">
                        {hooks.map(({ name }) => (
                            <div className={['hook'].join(' ')}>
                                <div
                                    className={`hook__img hook__img--${name}`}
                                ></div>
                                <div className="hook__title">{name}</div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="modal__footer">
                    <button className="btn" onClick={close}>
                        Close
                    </button>
                </div>
            </React.Fragment>
        </div>
    );
};
