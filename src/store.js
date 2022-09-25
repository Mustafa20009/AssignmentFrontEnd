import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducer/productReducer";
export default configureStore({
  reducer: {
    product: productSlice,
  },
});
