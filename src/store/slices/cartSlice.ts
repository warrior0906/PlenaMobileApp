import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';
import {ICartState, IProductItemInterface} from '../../utils/interfaces';

const initialState: ICartState = {
  itemList: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductItemInterface>) => {
      const itemIndex = state.itemList?.findIndex(
        e => e?.items?.id === action.payload.id,
      );
      const updatedList = [...state.itemList];
      if (itemIndex === -1) {
        updatedList.push({quantity: 1, items: action.payload});
      } else {
        updatedList[itemIndex].quantity += 1;
      }
      state.itemList = updatedList;
    },

    removeFromCart: (state, action: PayloadAction<IProductItemInterface>) => {
      const itemIndex = state.itemList?.findIndex(
        e => e?.items?.id === action.payload.id,
      );
      const updatedList = [...state.itemList];
      if (itemIndex > -1) {
        if (updatedList[itemIndex].quantity === 1) {
          updatedList.splice(itemIndex, 1);
        } else {
          updatedList[itemIndex].quantity -= 1;
        }
      }
      state.itemList = updatedList;
    },
  },
});

// Action creators are generated for each case reducer function
export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
