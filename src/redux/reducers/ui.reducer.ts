import {
    CLOSE_MENU,
    HIDE_MESSAGE,
    SHOW_MESSAGE_LOADING,
    FILTER_SPACE,
    CLOSE_SETTINGS,
} from '../constants';

export interface UIState {
    sidebarOpen: boolean;
    isLoading: boolean;
    currentSpace: string;
    dropdown: boolean;
    dropdownSettings: boolean;
}

const initialState: UIState = {
    sidebarOpen: true,
    isLoading: false,
    currentSpace: "Space 1",
    dropdown: false,
    dropdownSettings: false,
};

interface UIAction {
    type: string;
    payload?: {
        sidebarOpen?: boolean;
        space?: string;
        dropdown?: boolean;
        dropdownSettings?: boolean;
    };
}

export const ui = (
    state: UIState = initialState,
    action: UIAction = { type: '' }
): UIState => {
    switch (action.type) {
        case CLOSE_MENU:
            return {
                ...state,
                sidebarOpen: action.payload?.sidebarOpen || false,
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
                currentSpace: action.payload?.space || "Space 1",
                dropdown: action.payload?.dropdown || false,
            };
        case CLOSE_SETTINGS:
            return {
                ...state,
                dropdownSettings: action.payload?.dropdownSettings || false,
            };
        default:
            return state;
    }
};
