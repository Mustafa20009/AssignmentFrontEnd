import { createSlice } from "@reduxjs/toolkit";
import { fetchData, postData, updateData } from "../Actions/productAction";
import { toast } from "react-toastify";

export const productSlice = createSlice({
  name: "counter",
  initialState: {
    data: [],
    loading: true,
    activeProduct: null,
  },
  reducers: {
    activeProductReducer: (state, action) => {
      state.activeProduct = action.payload;
    },
    removeActiveProductReducer: (state) => {
      state.activeProduct = null;
    },
    loadingOnReducer: (state) => {
      state.loading = true;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.fulfilled, (state, action) => {
        state.data = [...action.payload.data];
        state.loading = false;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        toast.error("Something Went Wrong!");
      })
      .addCase(postData.fulfilled, (state, action) => {
        toast.success("Product Add Succesfully !");
      })
      .addCase(postData.rejected, (state, action) => {
        toast.error("Something Went Wrong !");
      })
      .addCase(updateData.fulfilled, (state, action) => {
        toast.success("Product Update Succesfully !");
      })
      .addCase(updateData.rejected, (state, action) => {
        toast.error("Something Went Wrong !");
      });
  },
});

export const {
  activeProductReducer,
  removeActiveProductReducer,
  loadingOnReducer,
} = productSlice.actions;

export default productSlice.reducer;
