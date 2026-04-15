import { createSlice } from '@reduxjs/toolkit';

export const currentQuerySlice = createSlice({
  name: 'currentQuerySlice',
  initialState: {
    countries: '',
    genreId: '',
    order: 'NUM_VOTE',
    type: '',
    year: '',
    page: 1,
  },
  reducers: {},
});

export default currentQuerySlice.reducer;
