import {
    FETCH_EVENTS_PROCESS,
    FETCH_EVENT_PROCESS,
    DELETE_EVENTS_PROCESS,
    CREATE_EVENT_PROCESS,
    UPDATE_EVENT_PROCESS,
    DELETE_EVENT_MODAL_OPEN,
    DELETE_EVENT_MODAL_CLOSE
} from '../constants';

const getEventsListProcess = (payload) => ({
    type: FETCH_EVENTS_PROCESS,
    payload,
});

const getEventProcess = (payload) => ({
    type: FETCH_EVENT_PROCESS,
    payload,
});

const deleteEventsProcess = (payload) => ({
    type: DELETE_EVENTS_PROCESS,
    payload,
});

const createNewEvent = (payload) => ({
    type: CREATE_EVENT_PROCESS,
    payload,
});

const updateEvent = (payload) => ({
    type: UPDATE_EVENT_PROCESS,
    payload,
});

const deleteEventModalOpen = (payload) => ({
    type: DELETE_EVENT_MODAL_OPEN,
    payload,
});

const deleteEventModalClose = (payload) => ({
    type: DELETE_EVENT_MODAL_CLOSE,
    payload,
});

export {
    getEventsListProcess,
    getEventProcess,
    deleteEventsProcess,
    createNewEvent,
    updateEvent,
    deleteEventModalOpen,
    deleteEventModalClose,
};
