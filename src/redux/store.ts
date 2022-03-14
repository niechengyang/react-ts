import thunk from "redux-thunk";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommengProductsReducer";
import { searchSlice } from "./productSearch/slice";
import { actionLogs } from "./middlewares/actionLogs";
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productSearch: searchSlice.reducer,
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLogs],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
