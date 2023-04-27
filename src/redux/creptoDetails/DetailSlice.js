import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const getCriptoDetails = createAsyncThunk('detail/getCriptoDetails', async (coinId) => {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`);
    const data = await response.json();
    console.log(data);
    return [
      {
        id: data.id,
        name: data.name,
        symbol: data.symbol,
        image: data.image.large,
        last_updated: data.last_updated,
        liquidity_score: data.liquidity_score,
        market_cap_rank: data.market_cap_rank,
        public_interest_score: data.public_interest_score,
        genesis_date: data.genesis_date,
        market_data: {
          circulating_supply: data.market_data.circulating_supply,
          current_price: data.market_data.current_price,
          high_24h: data.market_data.high_24h,
          low_24h: data.market_data.low_24h,
          market_cap_rank: data.market_data.market_cap_rank,
          market_cap_change_percentage_24h: data.market_data.market_cap_change_percentage_24h,
          market_cap_change_24h: data.market_data.market_cap_change_24h,
          market_cap: data.market_data.market_cap,
          total_volume: data.market_data.total_volume,
        },
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
