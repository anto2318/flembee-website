import {
    UPLOAD_IMAGE_PROCESS,
    UPLOAD_IMAGE_SUCCESS,
} from '../constants';

const initialState = {
    id: '',
    file: null,
    imageUrl: ''
};

export const uploads = (state = initialState, action = {}) => {
    switch (action.type) {
        case UPLOAD_IMAGE_PROCESS:
            return {
                ...state,
                id: action.payload.id,
                file: action.payload.file,
                isFetching: true,
            };
        case UPLOAD_IMAGE_SUCCESS:
            return {
                ...state,
                file: action.payload.file,
                imageUrl: action.payload,
                isFetching: false,
            };
        default:
            return state;
    }
};
