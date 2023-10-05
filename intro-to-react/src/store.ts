import { configureStore } from "@reduxjs/toolkit";
import adoptedPetReducer from "./adoptedPetSlice";

export const store = configureStore({
  reducer: { adoptedPet: adoptedPetReducer },
});

export type AppState = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

