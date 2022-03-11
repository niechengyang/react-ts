import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import languageReducer from "./language/languageReducer";
import recommendProductsReducer from "./recommendProducts/recommengProductsReducer";
import { actionLogs } from "./middlewares/actionLogs";
const rootReducer = combineReducers({
  language: languageReducer,
  recommendProducts: recommendProductsReducer,
});
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, actionLogs)));
export type RootState = ReturnType<typeof store.getState>;
export default store;
