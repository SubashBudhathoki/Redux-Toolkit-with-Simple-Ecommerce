// import { createSlice } from "@reduxjs/toolkit";

// export const Searchslice = createSlice({
//   name: "Searchslice",
//   initialState: {
//     data: null,
//   },
//   reducers: {
//     updateValue: (state, action) => {
//       state.data = [...action.payload];
//       console.log(state.data);
//     },
//     searchProduct: (state, action) => {
//       console.log(state.data);
//       return state.data.products.filter(
//         (product) => (
//           console.log(product.title),
//           console.log(action.payload),
//           product.title === action.payload
//         )
//       );
//     },
//   },
// });
// export const { searchProduct, updateValue } = Searchslice.actions;
// export default Searchslice.reducer;
