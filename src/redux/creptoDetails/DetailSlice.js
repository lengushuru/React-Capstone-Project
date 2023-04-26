import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getCriptoDetails = createAsyncThunk('detail/getCriptoDetails', async (coinId) => {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
    const data = await response.json();
    return [
      {
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        description: data.description.en,
        image: data.image.large,
      },
    ];
  } catch (error) {
    return error;
  }
});

const initialState = {
  detailData: [],
  loading: false,
  error: false,
};

const DetailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: {
    [getCriptoDetails.pending]: (state) => {
      state.loading = true;
    },
    [getCriptoDetails.fulfilled]: (state, action) => ({
      ...state,
      detailData: action.payload,
      loading: false,
    }),
    [getCriptoDetails.rejected]: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export { getCriptoDetails };
export default DetailSlice.reducer;
