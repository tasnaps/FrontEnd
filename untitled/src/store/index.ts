import { configureStore } from '@reduxjs/toolkit';
import chartsReducer from './chartStore.ts';

export default configureStore({
    reducer: {
        charts: chartsReducer,
    },
});