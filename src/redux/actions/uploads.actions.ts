import {
    UPLOAD_IMAGE_PROCESS,  
} from '../constants';

const uploadImage = (payload: any) => ({
    type: UPLOAD_IMAGE_PROCESS,
    payload,
});

export {
    uploadImage
};
