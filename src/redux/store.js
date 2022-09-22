import { configureStore } from '@reduxjs/toolkit';

import {
    apiMdl,
    eventsMdl,
    languageMdl,
    ordersMdl,
    spacesMdl,
    uploadsMdl,
    userMdl
} from './middlewares';
import { rootReducer } from './reducers';

if (process.env.NODE_ENV !== 'production') {
    // middleware.push();
}

export const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...languageMdl,
        ...eventsMdl,
        ...ordersMdl,
        ...spacesMdl,
        ...uploadsMdl,
        ...userMdl,
        apiMdl
    ]
  })
