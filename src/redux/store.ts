import { configureStore, combineReducers } from "@reduxjs/toolkit";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommengProductsReducer";
import { productDetailSlice } from "./productDetail/slice";
import { searchSlice } from "./productSearch/slice";
import { useSlice } from "./user/slice";
import { shoppingCartSlice } from "./shoppingCart/slice";
import { orderSlice } from "./order/slice";
import { actionLogs } from "./middlewares/actionLogs";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
  productDetail: productDetailSlice.reducer,
  productSearch: searchSlice.reducer,
  user: useSlice.reducer,
  shoppingCart: shoppingCartSlice.reducer,
  order: orderSlice.reducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLogs],
  devTools: true,
});
const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export default { store, persistor };
