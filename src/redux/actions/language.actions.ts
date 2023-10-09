import { GET_LANGUAGE, CHANGE_LANGUAGE } from '../constants';

const getLanguage = (payload: any) => ({
  type: GET_LANGUAGE,
  payload,
});

const changeLanguage = (payload: any) => ({
  type: CHANGE_LANGUAGE,
  payload,
});

export { getLanguage, changeLanguage };
