import { configureStore } from '@reduxjs/toolkit';
import githubReducer from './reducers/githubSlice.js';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
};


const persistedReducer = persistReducer(persistConfig, githubReducer);

const store = configureStore({
    reducer: {
        github: persistedReducer,
    },
});

export const persistor = persistStore(store);

export default store;
