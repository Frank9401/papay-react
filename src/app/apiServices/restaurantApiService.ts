import axios from "axios";
import { serviceApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { Restaurant } from "../../types/user"
import { SearchObj } from "../../types/others";

class RestaurantApiService {
    private readonly path: string;
   getChosenRestaurant: any;
    constructor() {
        this.path = serviceApi;
    }

    async getTopRestaurants() {
        try {
            const url = `/restaurants?order=top&page=1&limit=4`,
                result = await axios.get(this.path + url, { withCredentials: true })

            assert.ok(result, Definer.general_err1);
            assert.ok(result?.data?.state !== "fail", result?.data?.message);
            console.log('state:', result.data.state);

            const top_restaurants: Restaurant[] = result.data.data;
            return top_restaurants;
        } catch (error: any) {
            console.log(`ERROR::: getTopRestaurants ${error.message}`);
            throw error;
        }
    }
    async getRestaurants(data: SearchObj) {
        try {
            const url = `/restaurants?order=${data.order}&page=${data.page}&limit=${data.limit}`,
                result = await axios.get(this.path + url, { withCredentials: true })

            assert.ok(result, Definer.general_err1);
            assert.ok(result?.data?.state !== "fail", result?.data?.message);
            console.log('state:', result.data.state);

            const restaurants: Restaurant[] = result.data.data;
            return restaurants;
        } catch (error: any) {
            console.log(`ERROR::: getRestaurants ${error.message}`);
            throw error;
        }
    }
    async getChosenRestaurans(id: string) {
        try {
            const url = `/restaurants/${id}`,
                result = await axios.get(this.path + url, { withCredentials: true })

            assert.ok(result?.data, Definer.general_err1);
            assert.ok(result?.data?.state !== "fail", result?.data?.message);
            console.log("like-state:", result.data.data);

            const restaurant: Restaurant = result.data.data;
            return restaurant;
        } catch (error: any) {
            console.log(`ERROR::: getChosenRestaurant ${error.message}`);
            throw error;
        }
    }
}

export default RestaurantApiService;