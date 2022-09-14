import { combineReducers } from '@reduxjs/toolkit';

import { events } from './events.reducer';
// import { language } from './language.reducer';
import { notification } from './notification.reducer';
import { orders } from './orders.reducer';
import { spaces } from './spaces.reducer';
import { ui } from './ui.reducer';
import { uploads } from './uploads.reducer';
import { user } from './user.reducer';

export const rootReducer = combineReducers({
    events,
    // language,
    notification,
    orders,
    spaces,
    ui,
    uploads,
    user,
});
