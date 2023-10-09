import {
    DELETE_NOTIFICATION_SUCCESS,
    DELETE_NOTIFICATION_ERROR,
    CREATE_NOTIFICATION_SUCCESS,
    CREATE_NOTIFICATION_ERROR,
    UPDATE_NOTIFICATION_SUCCESS,
    UPDATE_NOTIFICATION_ERROR,
    CLEAR_NOTIFICATION,
} from '../constants';

export interface NotificationState {
    error: null | string;
    created: null | string;
    deleted: null | { type: string; message: string; status?: number };
    updated: null | string;
}

const initialState: NotificationState = {
    error: null,
    created: null,
    deleted: null,
    updated: null,
};

interface NotificationAction {
    type: string;
    payload?: {
        message: string;
        statusCode?: number;
    };
}

export const notification = (
    state: NotificationState = initialState,
    action: NotificationAction = { type: '' }
): NotificationState => {
    switch (action.type) {
        case CREATE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                created: 'success',
                deleted: null,
                updated: null,
            };
        case CREATE_NOTIFICATION_ERROR:
            return {
                ...state,
                created: 'error',
                deleted: null,
                updated: null,
            };
        case DELETE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                created: null,
                deleted: {
                    type: 'success',
                    message: action.payload?.message || '',
                    status: action.payload?.statusCode,
                },
                updated: null,
            };
        case DELETE_NOTIFICATION_ERROR:
            return {
                ...state,
                created: null,
                deleted: {
                    type: 'error',
                    message: action.payload?.message || '',
                    status: action.payload?.statusCode,
                },
                updated: null,
            };
        case UPDATE_NOTIFICATION_SUCCESS:
            return {
                ...state,
                created: null,
                deleted: null,
                updated: 'success',
            };
        case UPDATE_NOTIFICATION_ERROR:
            return {
                ...state,
                created: null,
                deleted: null,
                updated: 'error',
            };
        case CLEAR_NOTIFICATION:
            return {
                error: null,
                created: null,
                deleted: null,
                updated: null,
            };
        default:
            return state;
    }
};
