import { BoArticles } from "./boArticle";
import { Product } from "./product";
import { Restaurant } from "./user";


/** REACT APP STATE **/
export interface AppRootState{
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
    targetRestaurants: Restaurant[];
    randomRestaurant: Restaurant[];
    chosenRestaurant: Restaurant | null;
    targetProducts: Product[];
    chosenProduct: Product | null;
  };