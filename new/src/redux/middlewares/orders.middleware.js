import { message } from 'antd';

import {
    FETCH_ORDERS_PROCESS,
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_SUCCESS,
    DELETE_ORDERS_PROCESS,
    DELETE_ORDERS_SUCCESS,
    DELETE_ORDERS_ERROR,
    UPDATE_ORDER_PROCESS,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_ERROR,
} from '../constants';
import {
    apiRequest,
    errorUpdateNotification,
    errorDeleteNotification,
    clearNotification,
    showMessageLoading, 
    hideMessage,
    editOrderModalClose,
    deleteOrderModalClose,
} from '../actions';
import { getStorage } from '../../helpers';
import { logoutUser } from '../actions';

const URL = `${process.env.API}/stores`;
const ORDERS_URL = `${process.env.API}/orders/`;

export const ordersProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case FETCH_ORDERS_PROCESS:
            const query = action.payload;
            dispatch(
                apiRequest(
                    'GET',
                    `${URL}/${getStorage.user().store}/orders`,
                    null,
                    FETCH_ORDERS_SUCCESS,
                    FETCH_ORDERS_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case DELETE_ORDERS_PROCESS:
            const { ids } = action.payload;
            dispatch(
                apiRequest(
                    'DELETE',
                    `${URL}/${getStorage.user().store}/orders`,
                    ids,
                    DELETE_ORDERS_SUCCESS,
                    DELETE_ORDERS_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        case UPDATE_ORDER_PROCESS:
            const paramsId = action.payload.id;
            dispatch(
                apiRequest(
                    'PUT',
                    `${ORDERS_URL}${paramsId}`,
                    action.payload,
                    UPDATE_ORDER_SUCCESS,
                    UPDATE_ORDER_ERROR,
                    getStorage.token()
                )
            );
            dispatch(showMessageLoading());
        break;
        default:
            break;
    }
};

export const getOrdersSuccess = () => (next) => (action) => {
    next(action);
};

export const getOrdersError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === FETCH_ORDERS_ERROR) {
        dispatch(logoutUser());
        message.error('Invalid data!', 1);
        dispatch(hideMessage());
    }
};

export const deleteOrdersSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === DELETE_ORDERS_SUCCESS) {
        dispatch(deleteOrderModalClose());
        message.success('Deleted success!', 1);
        dispatch(hideMessage());
    }
};

export const deleteOrdersError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === DELETE_ORDERS_ERROR) {
        dispatch(errorDeleteNotification(action.payload));
        dispatch(clearNotification());
    }
};

export const updatedOrderSuccess = ({ dispatch }) => (next) => (
    action
) => {
    next(action);
    if (action.type === UPDATE_ORDER_SUCCESS) {
        dispatch(editOrderModalClose());
        message.success('Update success!', 1);
        dispatch(hideMessage());
    }
};

export const updatedOrderError = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === UPDATE_ORDER_ERROR) {
        dispatch(errorUpdateNotification());
        dispatch(clearNotification());
    }
};

export const ordersMdl = [
    ordersProcess,
    getOrdersSuccess,
    getOrdersError,
    deleteOrdersSuccess,
    updatedOrderSuccess,
    updatedOrderError,
    deleteOrdersError,
];
