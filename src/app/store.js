import currentQueryReducer from '@/features/currentQuerySlice';
import searchQueryReducer from '@/features/searchQuerySlice';
import { kinopoiskApi } from '@/services/kinopoiskApi';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuery: currentQueryReducer,
    searchQuerySlice: searchQueryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});
