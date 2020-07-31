import { createSlice } from "@reduxjs/toolkit";

const mediumSectionSlice = createSlice({
  name: "mediumSection",
  initialState: null,
  reducers: {
    setButtons(state, action) {
      return action.payload;
    },
    setActiveButton(state, action) {
      return {
        ...state,
        activeId: action.payload
      };
    },
  },
});

const { actions, reducer } = mediumSectionSlice;
export const { setButtons, setActiveButton } = actions;
export default reducer;
