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
    setMediumSectionPrice(state, action) {
      return {
        ...state,
        mediumSectionPrice: action.payload,
      };
    },
    setStyleSectionPrice(state, action) {
      return {
        ...state,
        styleSectionPrice: action.payload,
      };
    },
    setDurationSectionPrice(state, action) {
      return {
        ...state,
        durationSectionPrice: action.payload,
      };
    },
    setTimeFrameSectionPrice(state, action) {
      return {
        ...state,
        timeFrameSectionPrice: action.payload,
      };
    },
    setProductionQualityPrice(state, action) {
      return {
        ...state,
        productionQualityPrice: action.payload,
      };
    },
    setAdditionalOptionsPrice(state, action) {
      return {
        ...state,
        additionalOptionsPrice: action.payload,
      };
    },
  },
});

const { actions, reducer } = priceSlice;
export const {
  setMediumSectionPrice,
  setStyleSectionPrice,
  setProductionQualityPrice,
  setAdditionalOptionsPrice,
  setDurationSectionPrice,
  setTimeFrameSectionPrice
} = actions;
export default reducer;
