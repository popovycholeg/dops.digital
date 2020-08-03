import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    mediumSectionPrice: 0,
    styleSectionPrice: 0,
    durationSectionPrice: 0,
    timeFrameSectionPrice: 0,
    productionQualityPrice: 0,
    additionalOptionsPrice: 0,
  },
  reducers: {
    updatePrice(state, action) { // TDOD: refactore to one action
      return {
        ...state,
        ...action.payload,
      };
    }
  },
});

const { actions, reducer } = priceSlice;
export const {
  updatePrice
} = actions;
export default reducer;
