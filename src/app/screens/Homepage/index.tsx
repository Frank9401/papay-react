import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { Statistics } from "./statistics";
import { TopRestaurants } from "./topRestaurants";
import { BestRestaurants } from "./bestRestaurants";
import { Recommendations } from "./recommendations";
import { BestDishes } from "./bestDishes";
import { Advertisements } from "./adverstisement";
import { Events } from "./events";
import '../../../css/home.css'

//Redux 
import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import { setTopRestaurants, setBestRestaurants } from "../../screens/Homepage/slice";
import { retrieveTopRestaurants } from "../../screens/Homepage/selector";
import { Restaurant } from "../../../types/user";
import RestaurantApiService from "../../apiServices/restaurantApiService";


/** Redux Slice */
const actionDispatch = (dispatch: Dispatch) => ({
    setTopRestaurants: (data: Restaurant[]) => dispatch(setTopRestaurants(data)),
    setBestRestaurants: (data: Restaurant[]) => dispatch(setBestRestaurants(data))
});


export function HomePage() {
    /** Initializations */
    const { setTopRestaurants, setBestRestaurants } = actionDispatch(useDispatch());


    useEffect(() => {
        //backend data request
        const restaurantService = new RestaurantApiService();
        restaurantService.getTopRestaurants().then(data => {
            setTopRestaurants(data);
        }).catch(err => console.log(err.message))
        restaurantService.getRestaurants({ page: 1, limit: 4, order: 'mb_point' })
            .then(data => {
                setBestRestaurants(data)
            }).catch(err => console.log(err))
    }, []);



    return (
        <div className="homepage">
            <Statistics />
            <TopRestaurants />
            <BestRestaurants />
            <BestDishes />
            <Events />
            <Advertisements />
            <Recommendations />
        </div>
    );
}