import { message } from 'antd';

import {
    FETCH_EVENTS_PROCESS,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_ERROR,
    FETCH_EVENT_PROCESS,
    FETCH_EVENT_SUCCESS,
    FETCH_EVENT_ERROR,
    DELETE_EVENTS_PROCESS,
    DELETE_EVENTS_SUCCESS,
    DELETE_EVENTS_ERROR,
    CREATE_EVENT_PROCESS,
    CREATE_EVENT_SUCCESS,
    CREATE_EVENT_ERROR,
    UPDATE_EVENT_PROCESS,
    UPDATE_EVENT_SUCCESS,
    UPDATE_EVENT_ERROR,
} from '../constants';

import {
    apiRequest,
    errorCreateNotification,
    errorUpdateNotification,
    errorDeleteNotification,
    clearNotification,
    showMessageLoading, 
    hideMessage,
    deleteEventModalClose
} from '../actions';

import { getStorage } from '../../helpers';

const URL = `${process.env.REACT_APP_API}/events/`;

export const eventsProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case FETCH_EVENTS_PROCESS:
            dispatch(
                apiRequest(
                    'GET',
                    URL,
                    null,
                    FETCH_EVENTS_SUCCESS,
                    FETCH_EVENTS_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case FETCH_EVENT_PROCESS:
            const { id } = action.payload;
            dispatch(
                apiRequest(
                    'GET',
                    `${URL}${id}`,
                    null,
                    FETCH_EVENT_SUCCESS,
                    FETCH_EVENT_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case DELETE_EVENTS_PROCESS:
            const { ids } = action.payload;
            dispatch(
                apiRequest(
                    'DELETE',
                    URL,
                    ids,
                    DELETE_EVENTS_SUCCESS,
                    DELETE_EVENTS_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case CREATE_EVENT_PROCESS:
            dispatch(
                apiRequest(
                    'POST',
                    URL,
                    action.payload,
                    CREATE_EVENT_SUCCESS,
                    CREATE_EVENT_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case UPDATE_EVENT_PROCESS:
            const paramsId = action.payload.id;
            dispatch(
                apiRequest(
                    'PUT',
                    `${URL}${paramsId}`,
                    action.payload,
                    UPDATE_EVENT_SUCCESS,
                    UPDATE_EVENT_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        default:
            break;
    }
};

export const getEventsSuccess = () => (next) => (action) => {
    next(action);
};

export const getEventsError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_EVENTS_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const getEventSuccess = () => (next) => (action) => {
    next(action);
};

export const getEventError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_EVENT_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const deleteEventsSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === DELETE_EVENTS_SUCCESS) {
        dispatch(deleteEventModalClose());
        message.success('Deleted success!', 1);
        dispatch(hideMessage());
    }
};

export const deleteEventsError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === DELETE_EVENTS_ERROR) {
        dispatch(errorDeleteNotification(action.payload));
        dispatch(clearNotification());
    }
};

export const createdEventSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === CREATE_EVENT_SUCCESS) {
        message.success('Created success!', 1);
        dispatch(hideMessage());
    }
};

export const createdEventError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === CREATE_EVENT_ERROR) {
        dispatch(errorCreateNotification());
        dispatch(clearNotification());
    }
};

export const updatedEventSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === UPDATE_EVENT_SUCCESS) {
        message.success('Update success!', 1);
        dispatch(hideMessage());
    }
};

export const updatedEventError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === UPDATE_EVENT_ERROR) {
        dispatch(errorUpdateNotification());
        dispatch(clearNotification());
    }
};

export const eventsMdl = [
    eventsProcess,
    getEventsSuccess,
    getEventsError,
    getEventSuccess,
    getEventError,
    deleteEventsSuccess,
    createdEventSuccess,
    createdEventError,
    updatedEventSuccess,
    updatedEventError,
    deleteEventsError,
];
