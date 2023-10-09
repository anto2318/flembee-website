import { GET_LANGUAGE, CHANGE_LANGUAGE } from '../constants';
import es from '../../locales/es/messages.json';

export interface LanguageState {
    language: string;
    messages: any;
}

const initialState: LanguageState = {
    language: 'Spanish',
    messages: es,
};

interface LanguageAction {
    type: string;
    payload?: {
        language: string;
        messages: any;
    };
}

export const language = (
    state: LanguageState = initialState,
    action: LanguageAction = { type: '' }
): LanguageState => {
    switch (action.type) {
        case GET_LANGUAGE:
            return {
                ...state,
            };

        case CHANGE_LANGUAGE:
            const { language, messages } = action.payload || { language: '', messages: null };
            return {
                ...state,
                language: language || state.language,
                messages: messages || state.messages,
            };

        default:
            return state;
    }
};
