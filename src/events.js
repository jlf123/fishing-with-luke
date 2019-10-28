import React from 'react';

// Sprite constants
const ZOMBIE = 'zombie';
const PERSON = 'person';

export const events = [
    {
        sprite: ZOMBIE,
        eventType: 'chat',
        payload: {
            message: "If you don't catch anything, I'll eat YOU."
        }
    },
    {
        sprite: PERSON,
        eventType: 'chat',
        payload: { message: 'Wow....RUDE' }
    },
    {
        sprite: ZOMBIE,
        eventType: 'chat',
        payload: {
            message: 'Yum.... I smell Chris Rote'
        }
    },
    {
        sprite: ZOMBIE,
        eventType: 'move',
        payload: {
            movement: 'move-left',
            duration: 2000
        }
    },
    {
        sprite: ZOMBIE,
        eventType: 'destroy',
    },
    {
        sprite: PERSON,
        eventType: 'move',
        payload: {
            movement: 'move-right',
            duration: 2000
        }
    },
    {
        sprite: PERSON,
        eventType: 'move',
        payload: {
            movement: 'fish',
            duration: 2000
        }
    }
];

export const EventContext = React.createContext();
