import { configureStore } from '@reduxjs/toolkit';
import { serviceApi } from 'src/entities/Service';

export const store = configureStore({
    reducer: {
        [serviceApi.reducerPath]: serviceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(serviceApi.middleware),
});
