import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import auth from "./features/auth/authSlice";
import theme from "./features/theme/themeSlice";

const reducer = combineReducers({auth, theme})
const store = configureStore({ reducer });

export type RootState = ReturnType<typeof reducer>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export default store;
