import { mergeAll } from 'ramda';
import days from 'dayjs';

import {
    FETCH_EVENTS_PROCESS,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENT_PROCESS,
    FETCH_EVENT_SUCCESS,
    DELETE_EVENTS_PROCESS,
    DELETE_EVENTS_SUCCESS,
    DELETE_EVENTS_ERROR,
    CREATE_EVENT_PROCESS,
    CREATE_EVENT_SUCCESS,
    UPDATE_EVENT_PROCESS,
    UPDATE_EVENT_SUCCESS,
    DELETE_EVENT_MODAL_OPEN,
    DELETE_EVENT_MODAL_CLOSE
} from '../constants';

const initialState = {
    events: [],
    isFetching: true,
    singleEvent: {},
    deleteEventModal: {
        modal: false,
        cId: null,
    },
};

export const events = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_EVENTS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload.docs.map((event) => ({
                    ...event,
                    createdAt: days(event.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(event.updatedAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case FETCH_EVENT_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_EVENT_SUCCESS:
            return {
                ...state,
                singleEvent: action.payload,
                isFetching: false,
            };
        case DELETE_EVENTS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case DELETE_EVENTS_ERROR:
            return {
                ...state,
                isFetching: false,
            };
        case DELETE_EVENTS_SUCCESS:
            return {
                ...state,
                events: action.payload.result.events.map((event) => ({
                    ...event,
                    createdAt: days(event.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(event.createdAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case CREATE_EVENT_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case CREATE_EVENT_SUCCESS:
            return {
                ...state,
                events: action.payload.docs.map((event) => ({
                    ...event,
                    createdAt: days(event.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(event.createdAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case UPDATE_EVENT_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_EVENT_SUCCESS:
            return {
                ...state,
                events: state.events.map((event) => {
                    const check = event._id === action.payload._id;
                    if (check) {
                        event = mergeAll([
                            event,
                            {
                                ...action.payload,
                                createdAt: days(event.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                                updatedAt: days(event.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                            },
                        ]);
                    }
                    return event;
                }),
                isFetching: false,
            };
        case DELETE_EVENT_MODAL_OPEN:
            return {
                ...state,
                deleteEventModal: {
                    modal: true,
                    cId: action.payload.cId,
                }
            };
        case DELETE_EVENT_MODAL_CLOSE:
            return {
                ...state,
                deleteEventModal: {
                    modal: false,
                    cId: null,
                }
            };
        default:
            return state;
    }
};
