const FETCH_ORDERS_PROCESS = '[orders] Process Get Orders List';
const FETCH_ORDERS_ERROR = '[orders] Error Get Orders List';
const FETCH_ORDERS_SUCCESS = '[orders] Success Get Orders List';

const DELETE_ORDERS_PROCESS = '[orders] Process Delete Selected Orders';
const DELETE_ORDERS_SUCCESS = '[orders] Success Deleted Selected Orders';
const DELETE_ORDERS_ERROR = '[orders] Error Selected Orders Not Deleted';

const UPDATE_ORDER_PROCESS = '[orders] Process Update Order';
const UPDATE_ORDER_SUCCESS = '[orders] Success Update Order';
const UPDATE_ORDER_ERROR = '[orders] Error Update Order';

const EDIT_ORDER_MODAL_OPEN = '[orders] Open Order Modal Editor';
const EDIT_ORDER_MODAL_CLOSE = '[orders] Close Order Modal Editor';

const DELETE_ORDER_MODAL_OPEN = '[orders] Open Order Modal Delete';
const DELETE_ORDER_MODAL_CLOSE = '[orders] Close Order Modal Delete';

const FILTER_ORDER = '[orders] Filter Orders';

export {
    FETCH_ORDERS_PROCESS,
    FETCH_ORDERS_ERROR,
    FETCH_ORDERS_SUCCESS,
    DELETE_ORDERS_PROCESS,
    DELETE_ORDERS_SUCCESS,
    DELETE_ORDERS_ERROR,
    UPDATE_ORDER_PROCESS,
    UPDATE_ORDER_SUCCESS,
    UPDATE_ORDER_ERROR,
    EDIT_ORDER_MODAL_OPEN,
    EDIT_ORDER_MODAL_CLOSE,
    DELETE_ORDER_MODAL_OPEN,
    DELETE_ORDER_MODAL_CLOSE,
    FILTER_ORDER,
};
