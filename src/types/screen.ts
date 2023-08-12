import { BoArticles } from "./boArticle";
import { Order } from "./orders";
import { Product } from "./product";
import { Restaurant } from "./user";


/** REACT APP STATE **/
export interface AppRootState{
    ordersPage: any;
    homePage : HomePageState;
    restaurantPage: RestaurantPageState;
}

export interface HomePageState {
    topRestaurants?: Restaurant[];
    bestRestaurants?: Restaurant[];
    trendProducts?: Product[];
    bestBoArticles?: BoArticles[];
    trendBoArticles?: BoArticles[];
    newsBoArticles?: BoArticles[]
}

/** HOME PAGE **/
export interface HomePageState {
    topRestaurant: Restaurant[];
    bestRestaurant: Restaurant[];
    trendProduct: Product[];
    bestBoArticle: BoArticles[];
    trendBoArticle: BoArticles[];
    newsBoArticle: BoArticles[];
  }
  
  /** RESTAURANT PAGE **/
  export interface RestaurantPageState {
    randomRestaurants: any;
    targetRestaurants: Restaurant[];
    randomRestaurant: Restaurant[];
    chosenRestaurant: Restaurant | null;
    targetProducts: Product[];
    chosenProduct: Product | null;
  };

  /** ORDERS PAGE */

export interface OrdersPageState {
  pausedOrders: Order[],
  processOrders: Order[],
  finishedOrders: Order[],
}