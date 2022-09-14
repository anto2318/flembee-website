import {
    USER_LOGIN_PROCESS,
    CREATE_USER_PROCESS,
    USER_LOGOUT,
    GET_USER_FROM_STORAGE,
    UPDATE_USER_PROCESS,
    UPDATE_PASSWORD_PROCESS,
    FETCH_USER_EVENTS_PROCESS,
    FETCH_USER_SCHEDULE_PROCESS,
    UPDATE_USER_EVENTS_PROCESS,
    FETCH_USER_SPACES_PROCESS,
    UPDATE_USER_SPACES_PROCESS,
} from '../constants';

const loginUser = (payload) => ({
    type: USER_LOGIN_PROCESS,
    payload,
});

const registerUser = (payload) => ({
    type: CREATE_USER_PROCESS,
    payload,
});

const logoutUser = () => ({
    type: USER_LOGOUT,
});

const getUserFromStorage = (payload) => ({
    type: GET_USER_FROM_STORAGE,
    payload,
});

const updateUser = (payload) => ({
    type: UPDATE_USER_PROCESS,
    payload,
});

const updatePassword = (payload) => ({
    type: UPDATE_PASSWORD_PROCESS,
    payload,
});

const getUserEventsListProcess = (payload) => ({
    type: FETCH_USER_EVENTS_PROCESS,
    payload,
});

const getUserScheduleProcess = (payload) => ({
    type: FETCH_USER_SCHEDULE_PROCESS,
    payload,
});

const updateUserEvents = (payload) => ({
    type: UPDATE_USER_EVENTS_PROCESS,
    payload,
});

const getUserSpacesListProcess = (payload) => ({
    type: FETCH_USER_SPACES_PROCESS,
    payload,
});

const updateUserSpaces = (payload) => ({
    type: UPDATE_USER_SPACES_PROCESS,
    payload,
});

export { loginUser, 
        registerUser, 
        logoutUser, 
        getUserFromStorage, 
        updateUser, 
        updatePassword,
        getUserEventsListProcess,
        getUserScheduleProcess,
        updateUserEvents,
        getUserSpacesListProcess,
        updateUserSpaces,
    };
