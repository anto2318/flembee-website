const FETCH_USER_SUCCESS = '[auth] Login Success';
const FETCH_USER_ERROR = '[auth] Login Error';
const USER_LOGIN_PROCESS = '[auth] Login Process';

const CREATE_USER_SUCCESS = '[auth] Register Success';
const CREATE_USER_ERROR = '[auth] Register Error';
const CREATE_USER_PROCESS = '[auth] Register Process';

const USER_LOGOUT = '[auth] Logout';
const GET_USER_FROM_STORAGE = '[auth] Login With Storage Credentials';

const UPDATE_USER_PROCESS = '[auth] Process Update User';
const UPDATE_USER_SUCCESS = '[auth] Success Update User';
const UPDATE_USER_ERROR = '[auth] Error Update User';

const UPDATE_PASSWORD_PROCESS = '[auth] Process Update Password';
const UPDATE_PASSWORD_SUCCESS = '[auth] Success Update Password';
const UPDATE_PASSWORD_ERROR = '[auth] Error Update Password';

const FETCH_USER_EVENTS_PROCESS = '[user] Process Get User Events List';
const FETCH_USER_EVENTS_ERROR = '[user] Error Get User Events List';
const FETCH_USER_EVENTS_SUCCESS = '[user] Success Get User Events List';

const UPDATE_USER_EVENTS_PROCESS = '[user] Process Update User Events';
const UPDATE_USER_EVENTS_SUCCESS = '[user] Success Update User Events';
const UPDATE_USER_EVENTS_ERROR = '[user] Error Update User Events';

const FETCH_USER_SPACES_PROCESS = '[user] Process Get User Spaces List';
const FETCH_USER_SPACES_ERROR = '[user] Error Get User Spaces List';
const FETCH_USER_SPACES_SUCCESS = '[user] Success Get User Spaces List';

const UPDATE_USER_SPACES_PROCESS = '[user] Process Update User Spaces';
const UPDATE_USER_SPACES_SUCCESS = '[user] Success Update User Spaces';
const UPDATE_USER_SPACES_ERROR = '[user] Error Update User Spaces';

const FETCH_USER_SCHEDULE_PROCESS = '[user] Process Get User Schedule';
const FETCH_USER_SCHEDULE_ERROR = '[user] Error Get User Schedule';
const FETCH_USER_SCHEDULE_SUCCESS = '[user] Success Get User Schedule';

export {
    FETCH_USER_SUCCESS,
    FETCH_USER_ERROR,
    USER_LOGIN_PROCESS,
    CREATE_USER_SUCCESS,
    CREATE_USER_ERROR,
    CREATE_USER_PROCESS,
    UPDATE_USER_PROCESS,
    UPDATE_USER_SUCCESS,
    UPDATE_PASSWORD_PROCESS,
    UPDATE_PASSWORD_SUCCESS,
    UPDATE_PASSWORD_ERROR,
    UPDATE_USER_ERROR,
    USER_LOGOUT,
    GET_USER_FROM_STORAGE,
    FETCH_USER_EVENTS_PROCESS,
    FETCH_USER_EVENTS_ERROR,
    FETCH_USER_EVENTS_SUCCESS,
    FETCH_USER_SCHEDULE_PROCESS,
    FETCH_USER_SCHEDULE_ERROR,
    FETCH_USER_SCHEDULE_SUCCESS,
    UPDATE_USER_EVENTS_PROCESS,
    UPDATE_USER_EVENTS_SUCCESS,
    UPDATE_USER_EVENTS_ERROR,
    FETCH_USER_SPACES_PROCESS,
    FETCH_USER_SPACES_ERROR,
    FETCH_USER_SPACES_SUCCESS,
    UPDATE_USER_SPACES_PROCESS,
    UPDATE_USER_SPACES_SUCCESS,
    UPDATE_USER_SPACES_ERROR,
};
