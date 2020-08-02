import { createSlice } from "@reduxjs/toolkit";

const priceSlice = createSlice({
  name: "price",
  initialState: {
    mediumSectionPrice: 0,
    styleSectionPrice: 0,
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
  setAdditionalOptionsPrice
} = actions;
export default reducer;
