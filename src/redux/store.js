import { configureStore } from '@reduxjs/toolkit';
import CriptoSlice from './criptos/CriptoSlice';
import DetailSlice from './creptoDetails/DetailSlice';

export default configureStore({
  reducer: {
    cripto: CriptoSlice,
    detail: DetailSlice,
  },
});
