import { LANGUAGE_SUCCESS } from '@constants';
import en from '@locales/en/messages.json';

const initialState = {
  language: 'en',
  messages: en.messages,
};

export const language = (state = initialState, action = {}) => {
    switch (action.type) {
        case LANGUAGE_SUCCESS:
            const { language } = action.payload;
            return {
                ...state,
                language: language,
            };

        default:
            return state;
    }
};
