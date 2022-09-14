import {
    FETCH_ORDERS_PROCESS,
    DELETE_ORDERS_PROCESS,
    UPDATE_ORDER_PROCESS,
    EDIT_ORDER_MODAL_OPEN,
    EDIT_ORDER_MODAL_CLOSE,
    DELETE_ORDER_MODAL_OPEN,
    DELETE_ORDER_MODAL_CLOSE,
    FILTER_ORDER,
} from '../constants';

const getOrdersListProcess = (payload) => ({
    type: FETCH_ORDERS_PROCESS,
    payload,
});

const deleteOrdersProcess = (payload) => ({
    type: DELETE_ORDERS_PROCESS,
    payload,
});

const updateOrder = (payload) => ({
    type: UPDATE_ORDER_PROCESS,
    payload,
});

const editOrderModalOpen = (payload) => ({
    type: EDIT_ORDER_MODAL_OPEN,
    payload,
});

const editOrderModalClose = (payload) => ({
    type: EDIT_ORDER_MODAL_CLOSE,
    payload,
});

const deleteOrderModalOpen = (payload) => ({
    type: DELETE_ORDER_MODAL_OPEN,
    payload,
});

const deleteOrderModalClose = (payload) => ({
    type: DELETE_ORDER_MODAL_CLOSE,
    payload,
});

const filterOrder = (payload) => ({
    type: FILTER_ORDER,
    payload,
});

export {
    getOrdersListProcess,
    deleteOrdersProcess,
    filterOrder,
    updateOrder,
    editOrderModalOpen,
    editOrderModalClose,
    deleteOrderModalOpen,
    deleteOrderModalClose,
};
