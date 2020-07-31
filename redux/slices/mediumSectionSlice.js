import { createSlice } from "@reduxjs/toolkit";

const mediumSectionSlice = createSlice({
  name: "mediumSection",
  initialState: null,
  reducers: {
    setMediumButtons(state, action) {
      return action.payload;
    },
    setActiveMediumButton(state, action) {
      return {
        ...state,
        activeId: action.payload,
      };
    },
  },
});

const { actions, reducer } = mediumSectionSlice;
export const { setMediumButtons, setActiveMediumButton } = actions;
export default reducer;
