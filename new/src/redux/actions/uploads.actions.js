import {
    UPLOAD_IMAGE_PROCESS,
} from '../constants';

const uploadImage = (payload) => ({
    type: UPLOAD_IMAGE_PROCESS,
    payload,
});

export {
    uploadImage
};
