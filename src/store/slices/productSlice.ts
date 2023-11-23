import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {IProductListInterface, ProductState} from '../../utils/interfaces';

const initialState: ProductState = {
  loading: false,
  productList: {
    limit: 0,
    products: [],
  },
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: state => {
      state.loading = true;
    },
    setAllProducts: (state, action: PayloadAction<IProductListInterface>) => {
      state.productList = action.payload;
      state.loading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {getAllProducts, setAllProducts} = productSlice.actions;

export default productSlice.reducer;
