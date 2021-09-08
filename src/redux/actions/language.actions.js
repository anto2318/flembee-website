import { LANGUAGE_SUCCESS, LANGUAGE_PROCESS } from '@constants';

const changeLanguageProcess = (payload) => ({
    type: LANGUAGE_PROCESS,
    payload,
});

const changeLanguageSucess = (payload) => ({
    type: LANGUAGE_SUCCESS,
    payload,
});

export { changeLanguageProcess, changeLanguageSucess };
