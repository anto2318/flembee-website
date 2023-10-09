import { Middleware } from 'redux';
import { GET_LANGUAGE, CHANGE_LANGUAGE } from '../constants';

const languageProcess: Middleware = () => (next) => (action) => {
    next(action);
    switch (action.type) {
        case GET_LANGUAGE:
            // localStorage.getItem('userLanguage');
            break;

        case CHANGE_LANGUAGE:
            // localStorage.setItem("userLanguage", action.payload ? userLanguage : '');
            break;
    }
};

export const languagesMdl: Middleware[] = [languageProcess];
