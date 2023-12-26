import { configureStore, AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { authSlice } from "./auth/authState";
import { NvrM } from "./stateNVR/NVRstate";

const logger = createLogger({ collapsed: true });

export interface RootState {
  Auth:ReturnType<typeof authSlice.reducer>;
}

 const store = configureStore({
  reducer: {
    Auth: authSlice.reducer,
    NVRm:NvrM.reducer
    // Add other reducers as needed
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, null, AnyAction>;
export default store
// Replace '/* your auth state type */' with the actual type of your auth state.
