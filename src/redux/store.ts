import { configureStore, Middleware } from '@reduxjs/toolkit';

import {
    apiMdl,
    languagesMdl,
    uploadsMdl,
    userMdl
} from './middlewares';
import { rootReducer } from './reducers';

if (import .meta.env.NODE_ENV !== 'production') {
    // middleware.push();
}

const middlewares: Middleware[] = [
    ...languagesMdl,
    ...uploadsMdl,
    ...userMdl,
    apiMdl
];

export const store = configureStore({
    reducer: rootReducer,
    middleware: middlewares,
});
