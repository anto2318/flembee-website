import {
    UPLOAD_IMAGE_PROCESS,
    UPLOAD_IMAGE_SUCCESS,
} from '../constants';

export interface UploadsState {
    id: string;
    file: File | null;
    imageUrl: string;
    isFetching: boolean;
}

const initialState: UploadsState = {
    id: '',
    file: null,
    imageUrl: '',
    isFetching: false,
};

interface UploadsAction {
    type: string;
    payload: {
        id?: string;
        file?: File | null;
        imageUrl?: string;
    };
}

export const uploads = (
    state: UploadsState = initialState,
    action: UploadsAction = { type: '', payload: {} }
): UploadsState => {
    switch (action.type) {
        case UPLOAD_IMAGE_PROCESS:
            return {
                ...state,
                id: action.payload.id || '',
                file: action.payload.file || null,
                isFetching: true,
            };
        case UPLOAD_IMAGE_SUCCESS:
            return {
                ...state,
                file: action.payload.file || null,
                imageUrl: action.payload.imageUrl || '',
                isFetching: false,
            };
        default:
            return state;
    }
};
