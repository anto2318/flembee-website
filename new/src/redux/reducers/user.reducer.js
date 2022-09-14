import { isEmpty } from 'ramda';

import {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    USER_LOGOUT,
    GET_USER_FROM_STORAGE,
    USER_LOGIN_PROCESS,
    CREATE_USER_SUCCESS,
    CREATE_USER_PROCESS,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_PROCESS,
    UPDATE_PASSWORD_PROCESS,
    UPDATE_PASSWORD_SUCCESS,
    FETCH_USER_EVENTS_PROCESS,
    FETCH_USER_EVENTS_SUCCESS,
    FETCH_USER_SCHEDULE_PROCESS,
    FETCH_USER_SCHEDULE_SUCCESS,
    UPDATE_USER_EVENTS_PROCESS,
    UPDATE_USER_EVENTS_SUCCESS,
    FETCH_USER_SPACES_PROCESS,
    FETCH_USER_SPACES_SUCCESS,
    UPDATE_USER_SPACES_PROCESS,
    UPDATE_USER_SPACES_SUCCESS,
} from '../constants';

const initialState = {
    isFetching: true,
    isAuthenticated: false,
    user: {},
    error: null,
};

export const user = (state = initialState, action = {}) => {
    switch (action.type) {
        case USER_LOGIN_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                isFetching: false,
                error: null,
            };
        case FETCH_USER_ERROR:
            return {
                isAuthenticated: false,
                user: {},
                isFetching: false,
                error: action.payload,
            };
        case CREATE_USER_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case CREATE_USER_SUCCESS:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
                isFetching: false,
            };
        case UPDATE_USER_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            };
        case UPDATE_PASSWORD_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_PASSWORD_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            };
        case USER_LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: {},
                isFetching: false,
                error: null,
            };
        case GET_USER_FROM_STORAGE:
            return {
                ...state,
                isAuthenticated: !isEmpty(action.payload),
                user: action.payload,
                isFetching: false,
                error: null,
            };
    
        case FETCH_USER_EVENTS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_USER_EVENTS_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            };
        case FETCH_USER_SCHEDULE_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_USER_SCHEDULE_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            };
        case UPDATE_USER_EVENTS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_USER_EVENTS_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            };
        case FETCH_USER_SPACES_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_USER_SPACES_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            };
        case UPDATE_USER_SPACES_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_USER_SPACES_SUCCESS:
            return {
                ...state,
                user: action.payload,
                isFetching: false,
            };
        default:
            return state;
    }
};
