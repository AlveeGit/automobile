// src/store/rootReducer.js
import { combineReducers } from "redux";
import cartReducer from "./slices/cartSlice";
import userReducer from "./slices/userSlice";
import productReducer from "./slices//productSlice";
import adminReducer from "./slices/adminSlice";
import uiReducer from "./slices/uiSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  products: productReducer,
  admin: adminReducer,
  ui: uiReducer,
});

export default rootReducer;
