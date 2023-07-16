import { createSlice } from "@reduxjs/toolkit";

export const Cartslice = createSlice({
  name: "Cartslice",
  initialState: [],
  reducers: {
    addProducts: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
    },
    deleteProduct: (state, action) => {
      return state.filter((product, id) => id !== action.payload.id);
    },
    searchProduct: (state, action) => {
      return state.filter(
        (product) => (
          console.log(product.title),
          console.log(state),
          product.title === action.payload
        )
      );
    },
  },
});
export const { addProducts, deleteProduct, searchProduct } = Cartslice.actions;
export default Cartslice.reducer;
