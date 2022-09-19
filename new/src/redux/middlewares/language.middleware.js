import { GET_LANGUAGE, CHANGE_LANGUAGE } from '../constants';

export const languageProcess = () => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_LANGUAGE:
            // localStorage.getItem('userLanguage');
        break;

        case CHANGE_LANGUAGE:
            // localStorage.setItem("userLanguage", action.type.payload ? userLanguage : '')
        break;
    }
};

export const languageMdl = [languageProcess];
