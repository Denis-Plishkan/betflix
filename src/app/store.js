import currentQueryReducer from '@/features/currentQuerySlice';
import { kinopoiskApi } from '@/services/kinopoiskApi';
import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: {
    [kinopoiskApi.reducerPath]: kinopoiskApi.reducer,
    currentQuery: currentQueryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(kinopoiskApi.middleware),
});
