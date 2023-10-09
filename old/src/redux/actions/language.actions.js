import { GET_LANGUAGE, CHANGE_LANGUAGE } from '../constants';

const getLanguage = (payload) => ({
  type: GET_LANGUAGE,
  payload,
});

const changeLanguage = (payload) => ({
  type: CHANGE_LANGUAGE,
  payload,
});

export { getLanguage, changeLanguage };