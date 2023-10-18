import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import adoptedPetReducer from "./adoptedPetSlice";
import searchParamsReducer from "./searchParamsSlice";
import { petApi } from "./petApiService";

export const store = configureStore({
  reducer: {
    adoptedPet: adoptedPetReducer,
    all: searchParamsReducer,
    [petApi.reducerPath]: petApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(petApi.middleware),
});

export type AppState = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
