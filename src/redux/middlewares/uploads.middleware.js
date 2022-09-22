import { message } from 'antd';
import {
    UPLOAD_IMAGE_PROCESS,
    UPLOAD_IMAGE_SUCCESS,
    UPLOAD_IMAGE_ERROR,
} from '../constants';
import {
    xhrRequest,
    showMessageLoading,
    hideMessage,
    errorCreateNotification,
    clearNotification,
} from '../actions';

import { getStorage } from '../../helpers';

const URL = `${process.env.REACT_APP_API}/uploads/`;

export const uploadsProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case UPLOAD_IMAGE_PROCESS:
            dispatch(
                xhrRequest(
                    'POST',
                    `${URL}${action.payload.id}`,
                    action.payload,
                    UPLOAD_IMAGE_SUCCESS,
                    UPLOAD_IMAGE_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        default:
            break;
    }
};

export const uploadImageSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === UPLOAD_IMAGE_SUCCESS) {
        message.success('Upload image successful!', 1);
        dispatch(hideMessage());
    }
};

export const uploadImageError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === UPLOAD_IMAGE_ERROR) {
        dispatch(errorCreateNotification());
        dispatch(clearNotification());
    }
};

export const uploadsMdl = [
    uploadsProcess,
    uploadImageSuccess,
    uploadImageError,
];
