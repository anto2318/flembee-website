import { message } from 'antd';

import {
    FETCH_SPACES_PROCESS,
    FETCH_SPACES_SUCCESS,
    FETCH_SPACES_ERROR,
    FETCH_SPACE_PROCESS,
    FETCH_SPACE_SUCCESS,
    FETCH_SPACE_ERROR,
    DELETE_SPACES_PROCESS,
    DELETE_SPACES_SUCCESS,
    DELETE_SPACES_ERROR,
    CREATE_SPACE_PROCESS,
    CREATE_SPACE_SUCCESS,
    CREATE_SPACE_ERROR,
    UPDATE_SPACE_PROCESS,
    UPDATE_SPACE_SUCCESS,
    UPDATE_SPACE_ERROR,
} from '../constants';

import {
    apiRequest,
    errorCreateNotification,
    errorUpdateNotification,
    errorDeleteNotification,
    clearNotification,
    showMessageLoading, 
    hideMessage,
    deleteSpaceModalClose
} from '../actions';

import { getStorage } from '../../helpers';

const SPACES_URL = `${process.env.REACT_APP_API}/spaces/`;

export const spacesProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case FETCH_SPACES_PROCESS:
            dispatch(
                apiRequest(
                    'GET',
                    SPACES_URL,
                    null,
                    FETCH_SPACES_SUCCESS,
                    FETCH_SPACES_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case FETCH_SPACE_PROCESS:
            dispatch(
                apiRequest(
                    'GET',
                    `${SPACES_URL}${action.payload.id}`,
                    null,
                    FETCH_SPACE_SUCCESS,
                    FETCH_SPACE_ERROR,
                )
            );
            dispatch(showMessageLoading());
        break;
        case DELETE_SPACES_PROCESS:
            const { ids } = action.payload;
            dispatch(
                apiRequest(
                    'DELETE',
                    SPACES_URL,
                    ids,
                    DELETE_SPACES_SUCCESS,
                    DELETE_SPACES_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case CREATE_SPACE_PROCESS:
            dispatch(
                apiRequest(
                    'POST',
                    SPACES_URL,
                    action.payload,
                    CREATE_SPACE_SUCCESS,
                    CREATE_SPACE_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case UPDATE_SPACE_PROCESS:
            dispatch(
                apiRequest(
                    'PUT',
                    `${SPACES_URL}${action.payload.id}`,
                    action.payload,
                    UPDATE_SPACE_SUCCESS,
                    UPDATE_SPACE_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        default:
            break;
    }
};

export const getSpacesSuccess = () => (next) => (action) => {
    next(action);
};

export const getSpacesError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_SPACES_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const getSpaceSuccess = () => (next) => (action) => {
    next(action);
};

export const getSpaceError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_SPACE_ERROR) {
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const deleteSpacesSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === DELETE_SPACES_SUCCESS) {
        dispatch(deleteSpaceModalClose());
        message.success('Deleted success!', 1);
        dispatch(hideMessage());
    }
};

export const deleteSpacesError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === DELETE_SPACES_ERROR) {
        dispatch(errorDeleteNotification(action.payload));
        dispatch(clearNotification());
    }
};

export const createdSpaceSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === CREATE_SPACE_SUCCESS) {
        message.success('Created success!', 1);
        dispatch(hideMessage());
    }
};

export const createdSpaceError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === CREATE_SPACE_ERROR) {
        dispatch(errorCreateNotification());
        dispatch(clearNotification());
    }
};

export const updatedSpaceSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === UPDATE_SPACE_SUCCESS) {
        message.success('Update success!', 1);
        dispatch(hideMessage());
    }
};

export const updatedSpaceError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === UPDATE_SPACE_ERROR) {
        dispatch(errorUpdateNotification());
        dispatch(clearNotification());
    }
};

export const spacesMdl = [
    spacesProcess,
    getSpacesSuccess,
    getSpacesError,
    getSpaceSuccess,
    getSpaceError,
    deleteSpacesSuccess,
    createdSpaceSuccess,
    createdSpaceError,
    updatedSpaceSuccess,
    updatedSpaceError,
    deleteSpacesError,
];
