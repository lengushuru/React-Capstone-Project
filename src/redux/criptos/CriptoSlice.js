import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const getCryptos = createAsyncThunk('fetch/crypto', async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/');
    return response.data;
  } catch (error) {
    return error;
  }
});

const initialState = {
  cyptoData: [],
  loading: false,
  error: false,
};

const CriptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCryptos.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCryptos.fulfilled, (state, action) => {
      state.loading = false;
      state.cyptoData = action.payload;
    });
    builder.addCase(getCryptos.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export { getCryptos };
export default CriptoSlice.reducer;
