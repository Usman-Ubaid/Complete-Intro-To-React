import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// interface AdoptedPetState {
//   value: null;
// }

// const initialState: AdoptedPetState = {
//   value: null,
// };

export const adoptedPetSlice = createSlice({
  name: "adoptedPet",
  initialState: {
    value: null,
  },
  reducers: {
    adopt: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { adopt } = adoptedPetSlice.actions;
export default adoptedPetSlice.reducer;
