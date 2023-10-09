import { mergeAll } from 'ramda';
import days from 'dayjs';

import {
    FETCH_SPACES_PROCESS,
    FETCH_SPACES_SUCCESS,
    FETCH_SPACE_PROCESS,
    FETCH_SPACE_SUCCESS,
    DELETE_SPACES_PROCESS,
    DELETE_SPACES_SUCCESS,
    DELETE_SPACES_ERROR,
    CREATE_SPACE_PROCESS,
    CREATE_SPACE_SUCCESS,
    UPDATE_SPACE_PROCESS,
    UPDATE_SPACE_SUCCESS,
    DELETE_SPACE_MODAL_OPEN,
    DELETE_SPACE_MODAL_CLOSE
} from '../constants';

const initialState = {
    spaces: [],
    singleSpace: {},
    isFetching: true,
    deleteSpaceModal: {
        modal: false,
        sId: null,
    },
};

export const spaces = (state = initialState, action = {}) => {
    switch (action.type) {
        case FETCH_SPACES_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SPACES_SUCCESS:
            return {
                ...state,
                spaces: action.payload.docs.map((space) => ({
                    ...space,
                    createdAt: days(space.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(space.updatedAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case FETCH_SPACE_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case FETCH_SPACE_SUCCESS:
            return {
                ...state,
                singleSpace: {
                    ...action.payload,
                    createdAt: days(action.payload.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(action.payload.updatedAt).format('YYYY-MM-DD'),
                },
                isFetching: false,
            };
        case DELETE_SPACES_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case DELETE_SPACES_ERROR:
            return {
                ...state,
                isFetching: false,
            };
        case DELETE_SPACES_SUCCESS:
            return {
                ...state,
                spaces: action.payload.result.userSpaces.map((space) => ({
                    ...space,
                    createdAt: days(space.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(space.createdAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case CREATE_SPACE_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case CREATE_SPACE_SUCCESS:
            return {
                ...state,
                spaces: action.payload.map((space) => ({
                    ...space,
                    createdAt: days(space.createdAt).format('YYYY-MM-DD'),
                    updatedAt: days(space.createdAt).format('YYYY-MM-DD'),
                })),
                isFetching: false,
            };
        case UPDATE_SPACE_PROCESS:
            return {
                ...state,
                isFetching: true,
            };
        case UPDATE_SPACE_SUCCESS:
            return {
                ...state,
                spaces: state.spaces.map((space) => {
                    const check = space._id === action.payload._id;
                    if (check) {
                        space = mergeAll([
                            space,
                            {
                                ...action.payload,
                                createdAt: days(space.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                                updatedAt: days(space.createdAt).format(
                                    'YYYY-MM-DD'
                                ),
                            },
                        ]);
                    }
                    return space;
                }),
                isFetching: false,
            };
        case DELETE_SPACE_MODAL_OPEN:
            return {
                ...state,
                deleteSpaceModal: {
                    modal: true,
                    sId: action.payload.sId,
                }
            };
        case DELETE_SPACE_MODAL_CLOSE:
            return {
                ...state,
                deleteSpaceModal: {
                    modal: false,
                    sId: null,
                }
            };
        default:
            return state;
    }
};
