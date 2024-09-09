import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../reducers/cartReducer";

const store = configureStore({
  reducer: {
    cart: cartReducer, // 리듀서 등록
  },
});

export default store;
