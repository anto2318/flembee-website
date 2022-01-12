import { LANGUAGE_SUCCESS, LANGUAGE_PROCESS } from '@constants';

export const languageProcess = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === LANGUAGE_PROCESS) {
        console.log("PROCESS")
    }
};

export const updateLanguageSuccess = ({ dispatch }) => (next) => (action) => {
    next(action);
    if (action.type === LANGUAGE_SUCCESS) {
        console.log("SUCCESS")
    }
};

export const languageMdl = [languageProcess, updateLanguageSuccess];
