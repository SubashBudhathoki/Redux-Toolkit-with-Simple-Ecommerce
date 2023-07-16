import { configureStore } from "@reduxjs/toolkit";
import { Apislice } from "../slice/Apislice";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import CartsliceReducer from "../slice/Cartslice";
import SearchsliceReducer from "../slice/Searchslice";
export const store = configureStore({
  reducer: {
    cart: CartsliceReducer,
    search: SearchsliceReducer,
    [Apislice.reducerPath]: Apislice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Apislice.middleware),
});

setupListeners(store.dispatch);
