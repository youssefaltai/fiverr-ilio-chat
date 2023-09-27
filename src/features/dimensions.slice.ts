import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface DimensionsState {
  width: number;
  height: number;
}
const initialState: DimensionsState = {
  width: window.innerWidth,
  height: window.innerHeight,
} as DimensionsState;

export const dimensionsSlice = createSlice({
  name: "dimension",
  initialState,
  reducers: {
    setDimensions: (state, action: PayloadAction<DimensionsState>) => {
      const { width, height } = action.payload;
      return { ...state, width, height };
    },
  },
});

export const { setDimensions } = dimensionsSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const userId = (state: RootState) => state.auth.id;

export default dimensionsSlice.reducer;
