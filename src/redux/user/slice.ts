import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
interface UserState {
  loading: boolean;
  error: string | null;
  token: string | null;
}
const initialState: UserState = {
  loading: false,
  error: null,
  token: null,
};
export const signIn = createAsyncThunk(
  "user/signIn",
  async (
    paramaters: {
      email: string;
      password: string;
    },
    thunkApi
  ) => {
    const { data } = await axios.post(
      `http://123.56.149.216:8080/auth/login`,{
          email: paramaters.email,
          password: paramaters.password
      }
    );
    return data.token;
  }
);

export const useSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.error = null
      state.loading = false
      state.token = null
    }
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.loading = true;
    },
    [signIn.fulfilled.type]: (state, action) => {
      state.loading = false;
      state.token = action.payload;
      state.error = null;
    },
    [signIn.rejected.type]: (state, action) => {
      state.loading = false;
      state.token = null;
      state.error = action.payload;
    },
  },
});
export const { logout } = useSlice.actions
