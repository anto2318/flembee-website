import { CLOSE_MENU, HIDE_MESSAGE, SHOW_MESSAGE_LOADING, FILTER_SPACE, CLOSE_SETTINGS } from '../constants';

const initialState = {
    sidebarOpen: true,
    isLoading: false,
    currentSpace: "Space 1",
    dropdown: false,
    dropdownSettings: false,
};

export const ui = (state = initialState, action = {}) => {
    switch (action.type) {
        case CLOSE_MENU:
            return {
                ...state,
                sidebarOpen: action.payload.sidebarOpen,
        };
        case SHOW_MESSAGE_LOADING:
            return {
                ...state,
                isLoading: true,
        };
        case HIDE_MESSAGE:
            return {
                ...state,
                isLoading: false,
        };
        case FILTER_SPACE:
            return {
                ...state,
                currentSpace: action.payload.space,
                dropdown: action.payload.dropdown,
        };
        case CLOSE_SETTINGS:
            return {
                ...state,
                dropdownSettings: action.payload.dropdownSettings,
        };
        default:
            return state;
    }
};
