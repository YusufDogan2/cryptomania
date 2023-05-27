import { configureStore } from '@reduxjs/toolkit';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { setupListeners } from '@reduxjs/toolkit/query';



const store = configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
        [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            cryptoApi.middleware,
            cryptoNewsApi.middleware
        )
});

setupListeners(store.dispatch);

export default store;










/* import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { cryptoApi } from '../services/cryptoApi';

export default configureStore({
    reducer: {
        [cryptoApi.reducerPath]: cryptoApi.reducer,
    },
    middleware: getDefaultMiddleware().concat(cryptoApi.middleware)
}); */