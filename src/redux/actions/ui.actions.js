import { CLOSE_MENU, SHOW_MESSAGE_LOADING, HIDE_MESSAGE, FILTER_SPACE, CLOSE_SETTINGS } from '../constants';

const closeMenu = (payload) => ({
    type: CLOSE_MENU,
    payload,
});

const showMessageLoading = () => ({
    type: SHOW_MESSAGE_LOADING,
});

const hideMessage = () => ({
    type: HIDE_MESSAGE,
});

const filterSpace = (payload) => ({
    type: FILTER_SPACE,
    payload,
});

const closeSettings = (payload) => ({
    type: CLOSE_SETTINGS,
    payload,
});

export {
    closeMenu,
    showMessageLoading,
    hideMessage,
    filterSpace,
    closeSettings,
};
