import { createSlice } from "@reduxjs/toolkit";
import { RestaurantPageState } from "../../../types/screen";

const initialState: RestaurantPageState = {
  targetRestaurants: [],
  randomRestaurant: [],
  chosenRestaurant: null,
  targetProducts: [],
  chosenProduct: null,
  randomRestaurants: undefined
};

const restaurantPageSlice = createSlice({
  name: "restaurantPage",
  initialState,
  reducers: {
    setTargetRestaurants: (state, action) => {
      state.targetRestaurants = action.payload;
    },
    setRandomRestaurants: (state, action) => {
      state.randomRestaurant = action.payload;
    },
    setChosenRestaurant: (state, action) => {
      state.chosenRestaurant = action.payload;
    },
    setTargetProducts: (state, action) => {
      state.targetProducts = action.payload;
    },
    setChosenProduct: (state, action) => {
      state.chosenProduct = action.payload;
    },
  },
});

export const {
  setTargetRestaurants,
  setRandomRestaurants,
  setChosenRestaurant,
  setTargetProducts,
  setChosenProduct,
} = restaurantPageSlice.actions;

const RestaurantPageReducer = restaurantPageSlice.reducer; 
export default RestaurantPageReducer;