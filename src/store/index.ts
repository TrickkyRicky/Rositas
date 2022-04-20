import { configureStore, combineReducers } from "@reduxjs/toolkit";
import AdminSlice from "./admin/admin-slice";
import MenuSlice from "./menu/menu-slice";

const rootReducer = combineReducers({
  Admin: AdminSlice.reducer,
  Menu: MenuSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default store;
