import { combineReducers } from '@reduxjs/toolkit';

import { language, LanguageState } from './language.reducer';
import { notification, NotificationState } from './notification.reducer';
import { ui, UIState } from './ui.reducer';
import { uploads, UploadsState } from './uploads.reducer';
import { user, UserState } from './user.reducer';

export interface RootState {
    language: LanguageState;
    notification: NotificationState;
    ui: UIState;
    uploads: UploadsState;
    user: UserState;
}

export const rootReducer = combineReducers({
    language,
    notification,
    ui,
    uploads,
    user,
});
