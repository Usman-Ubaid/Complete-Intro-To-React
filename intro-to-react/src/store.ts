import { configureStore } from "@reduxjs/toolkit";
import adoptedPetReducer from "./adoptedPetSlice";
import searchParamsReducer from "./searchParamsSlice";

export const store = configureStore({
  reducer: { adoptedPet: adoptedPetReducer, all: searchParamsReducer },
});

export type AppState = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
