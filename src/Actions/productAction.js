import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
let userAPI = "http://localhost:4000";
export const fetchData = createAsyncThunk("fetchData", async (name) => {
  const response = await axios.get(
    userAPI + `/product/search?name=${name ? name : ""}`
  );
  return response.data;
});
export const postData = createAsyncThunk(
  "postData",
  async (body, { dispatch }) => {
    const response = await axios.post(userAPI + "/product", { ...body });
    dispatch(fetchData());

    return response.data;
  }
);

export const updateData = createAsyncThunk(
  "updateData",
  async (data, { dispatch }) => {
    const response = await axios.patch(userAPI + `/product/${data.id}`, {
      ...data.body,
    });
    dispatch(fetchData());

    return response.data;
  }
);
