import {
    FETCH_SPACES_PROCESS,
    FETCH_SPACE_PROCESS,
    DELETE_SPACES_PROCESS,
    CREATE_SPACE_PROCESS,
    UPDATE_SPACE_PROCESS,
    DELETE_SPACE_MODAL_OPEN,
    DELETE_SPACE_MODAL_CLOSE,
} from '../constants';

const getSpacesListProcess = (payload) => ({
    type: FETCH_SPACES_PROCESS,
    payload,
});

const getSpaceProcess = (payload) => ({
    type: FETCH_SPACE_PROCESS,
    payload,
});

const deleteSpacesProcess = (payload) => ({
    type: DELETE_SPACES_PROCESS,
    payload,
});

const createNewSpace = (payload) => ({
    type: CREATE_SPACE_PROCESS,
    payload,
});

const updateSpace = (payload) => ({
    type: UPDATE_SPACE_PROCESS,
    payload,
});

const deleteSpaceModalOpen = (payload) => ({
    type: DELETE_SPACE_MODAL_OPEN,
    payload,
});

const deleteSpaceModalClose = (payload) => ({
    type: DELETE_SPACE_MODAL_CLOSE,
    payload,
});

export {
    getSpacesListProcess,
    getSpaceProcess,
    deleteSpacesProcess,
    createNewSpace,
    updateSpace,
    deleteSpaceModalOpen,
    deleteSpaceModalClose,
};
