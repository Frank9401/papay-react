import axios from "axios";
import { serviceApi } from "../../lib/config";
import assert from "assert";
import { Definer } from "../../lib/Definer";
import { Restaurant } from "../../types/user"
import { ProductSearchObject } from "../../types/others";
import { Product } from "../../types/product";


class ProductApiService {
    private readonly path: string;
   getChosenDish: any;
    constructor() {
        this.path = serviceApi;
    }

    async getTargetProducts(data: ProductSearchObject) {
        try {
            const url = `/products`,
                result = await axios.post(this.path + url, data, { withCredentials: true })
               
                console.log("state:", result.data.state);
                assert.ok(result, Definer.general_err1);
                assert.ok(result?.data?.state != 'fail', result?.data?.message);
            
            const products: Product = result.data.data;
            return products;
        } catch (error: any) {
            console.log(`ERROR::: getTargetProducts ${error.message}`);
            throw error;
        }
    }
}

export default ProductApiService;