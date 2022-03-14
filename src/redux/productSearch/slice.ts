import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface ProductSliceState {
  loading: boolean;
  error: string | null;
  data: any;
  pagination: any;
}
const initialState: ProductSliceState = {
  loading: true,
  error: null,
  data: null,
  pagination: null,
};
export const searchProduct = createAsyncThunk(
  "productSearch/searchProduct",
  async (
    paramaters: {
      keywords: string | undefined;
      nextPage: number | string;
      pageSize: number | string;
    },
    thunkApi
  ) => {
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`;
    if (paramaters.keywords) {
      url += `&keyword=${paramaters.keywords}`;
    }
    const response = await axios.get(url);
    return {
      data: response.data,
      pagination: JSON.parse(response.headers["x-pagination"]),
    };
  }
);

export const searchSlice = createSlice({
  name: "productSearch",
  initialState,
  reducers: {},
  extraReducers: {
    [searchProduct.pending.type]: (state) => {
      state.loading = true;
    },
    [searchProduct.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.data = action.payload.data;
      state.pagination = action.payload.pagination;
      state.error = null;
    },
    [searchProduct.rejected.type]: (state, action) => {
      state.loading = false;
      state.data = null;
      state.pagination = null;
      state.error = action.payload;
    }
  },
});
