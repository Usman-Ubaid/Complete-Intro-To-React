import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchParamsState {
  value: {
    location: string;
    breed: string;
    animal: string;
  };
}

const initialState: SearchParamsState = {
  value: {
    location: "",
    breed: "",
    animal: "",
  },
};

const searchParamsSlice = createSlice({
  name: "searchParams",
  initialState,
  reducers: {
    all: (state, action: PayloadAction<SearchParamsState["value"]>) => {
      state.value = action.payload;
    },
  },
});

export const { all } = searchParamsSlice.actions;
export default searchParamsSlice.reducer;
