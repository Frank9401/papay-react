import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./adverstisement";
import { Events } from "./events";
import { Recommendations } from "./recommendations";
import '../../../css/home.css';


//Redux 
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { setTopRestaurants } from "../../screens/Homepage/slice";
import { retrieveTopRestaurants } from "../../screens/Homepage/selector";
import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";


/** Redux Slice */
const actionDispatch = (dispatch: Dispatch) => ({
    setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data))
});
/** Redux Selector */
const topRestaurantRetriever = createSelector(
    retrieveTopRestaurants,
    (topRestaurants) => ({
        topRestaurants
    })
);


export function HomePage(){
        /** Initializations */
        const { setTopRestaurants } = actionDispatch(useDispatch());
        const { topRestaurants } = useSelector(topRestaurantRetriever)
    
        console.log("topRestaurants:::", topRestaurants);
    
    useEffect(() => {
        const restaurantService = new RestaurantApiService();
      setTopRestaurants([]);
        },
    []);

    return(
        <div className="homepage">
            <Statistics/>
            <TopRestaurants/>
            <BestRestaurants/>
            <BestDishes/>
            <Advertisements/>
            <Events/>
            <Recommendations/>
        </div>
    )
}