import { mergeAll } from 'ramda';
import days from 'dayjs';

import {
    FETCH_ORDERS_PROCESS,
    FETCH_ORDERS_SUCCESS,
    DELETE_ORDERS_PROCESS,
    DELETE_ORDERS_SUCCESS,
    DELETE_ORDERS_ERROR,
    UPDATE_ORDER_PROCESS,
    UPDATE_ORDER_SUCCESS,
    EDIT_ORDER_MODAL_OPEN,
    EDIT_ORDER_MODAL_CLOSE,
    DELETE_ORDER_MODAL_OPEN,
    DELETE_ORDER_MODAL_CLOSE,
    FILTER_ORDER,
} from '../constants';

const initialState = {
    orders: [],
    currentStatus: 'All',
    isFetching: true,
    editOrderModal: {
        modal: false,
        oId: null,
        status: "",
    },
    deleteOrderModal: {
        modal: false,
        oId: null,
    },
    dropdown: false,
};

export const orders = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_ORDERS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.map((order) => ({
                    ...order,
                    createdAt: days(order.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(order.updatedAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case DELETE_ORDERS_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case DELETE_ORDERS_ERROR:
            return {
                ...state,
                isFetching: false,
            };
        case DELETE_ORDERS_SUCCESS:
            return {
                ...state,
                orders: action.payload.result.orders.map((order) => ({
                    ...order,
                    createdAt: days(order.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(order.createdAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case UPDATE_ORDER_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                orders: state.orders.map((order) => {
                    const check = order._id === action.payload._id;
                    if (check) {
                        order = mergeAll([
                            order,
                            {
                                ...action.payload,
                                createdAt: days(order.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                                updatedAt: days(order.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                            },
                        ]);
                    }
                    return order;
                }),
                isFetching: false,
            };
        case EDIT_ORDER_MODAL_OPEN:
            return {
                ...state,
                editOrderModal: {
                    modal: true,
                    oId: action.payload.oId,
                    status: action.payload.status
                }
            };
        case EDIT_ORDER_MODAL_CLOSE:
            return {
                ...state,
                editOrderModal: {
                    modal: false,
                    oId: null,
                    status: "",
                }
            };
        case DELETE_ORDER_MODAL_OPEN:
            return {
                ...state,
                deleteOrderModal: {
                    modal: true,
                    oId: action.payload.oId,
                }
            };
        case DELETE_ORDER_MODAL_CLOSE:
            return {
                ...state,
                deleteOrderModal: {
                    modal: false,
                    oId: null,
                }
            };
        case FILTER_ORDER:
            return {
                ...state,
                currentStatus: action.payload.status,
                dropdown: action.payload.dropdown,
        };
        default:
            return state;
    }
};
