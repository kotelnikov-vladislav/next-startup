import { configureStore } from '@reduxjs/toolkit';
import { serviceApi } from 'src/entities/Service';
import { mailApi } from 'src/entities/Mail';

export const store = configureStore({
    reducer: {
        [mailApi.reducerPath]: mailApi.reducer,
        [serviceApi.reducerPath]: serviceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
            .concat(mailApi.middleware)
            .concat(serviceApi.middleware),
});
