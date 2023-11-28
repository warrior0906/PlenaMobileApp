import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {
  IProductItemInterface,
  IProductListInterface,
  ProductState,
} from '../../utils/interfaces';

const initialState: ProductState = {
  loading: false,
  productList: null,
  selectedProduct: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    getAllProducts: state => {
      state.loading = true;
    },
    setAllProducts: (
      state,
      action: PayloadAction<IProductListInterface | null>,
    ) => {
      state.productList = action.payload;
      state.loading = false;
    },
    setSelectedProduct: (
      state,
      action: PayloadAction<IProductItemInterface | null>,
    ) => {
      state.selectedProduct = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {getAllProducts, setAllProducts, setSelectedProduct} =
  productSlice.actions;

export default productSlice.reducer;
