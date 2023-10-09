import {
    USER_LOGIN_PROCESS,
    CREATE_USER_PROCESS,
    USER_LOGOUT,
    GET_USER_FROM_STORAGE,
    UPDATE_USER_PROCESS,
    UPDATE_PASSWORD_PROCESS,
} from '../constants';

const loginUser = (payload: any) => ({
    type: USER_LOGIN_PROCESS,
    payload,
});

const registerUser = (payload: any) => ({
    type: CREATE_USER_PROCESS,
    payload,
});

const logoutUser = () => ({
    type: USER_LOGOUT,
});

const getUserFromStorage = (payload: any) => ({
    type: GET_USER_FROM_STORAGE,
    payload,
});

const updateUser = (payload: any) => ({
    type: UPDATE_USER_PROCESS,
    payload,
});

const updatePassword = (payload: any) => ({
    type: UPDATE_PASSWORD_PROCESS,
    payload,
});

export { 
    loginUser, 
    registerUser, 
    logoutUser, 
    getUserFromStorage, 
    updateUser, 
    updatePassword,
};
