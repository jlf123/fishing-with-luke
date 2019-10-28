import { useState } from 'react';
import { events } from '../events';

export const useEventsQueue = () => {
    const [eventsQueue, setEventsQueue] = useState(events);

    const updateEventsQueue = () => {
        // remove the first element of the queue
        eventsQueue.shift();
        setEventsQueue(eventsQueue);
    };
    return [eventsQueue, updateEventsQueue];
};
