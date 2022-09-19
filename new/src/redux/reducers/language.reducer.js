import { GET_LANGUAGE, CHANGE_LANGUAGE } from '../constants';
import en from '../../locales/en/messages.json';

const initialState = {
  language: 'English',
  messages: en,
};

export const language = (state = initialState, action = {}) => {
    switch (action.type) {
        case GET_LANGUAGE:
            return {
                ...state,
            };

        case CHANGE_LANGUAGE:
            const { language, messages } = action.payload;
            return {
                ...state,
                language: language,
                messages: messages
            };

        default:
            return state;
    }
};
