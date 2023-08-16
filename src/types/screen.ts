import { BoArticles } from "./boArticle";
import { Follower, Following } from "./follow";
import { Order } from "./orders";
import { Product } from "./product";
import { Member, Restaurant } from "./user";

export interface AppRootState {
    homePage: HomePageState;
    restaurantPage: RestaurantPageState;
    ordersPage: OrdersPageState;
    communityPage: CommunityPageState
    memberPage: MemberPageState
}

/** HOMEPAGE */
export interface HomePageState {
    topRestaurants: Restaurant[];
    bestRestaurants: Restaurant[];
    trendProducts: Product[];
    bestBoArticles: BoArticles[];
    trendBoArticles: BoArticles[];
    newsBoArticles: BoArticles[]
}

/** RESTAURANT PAGE */

export interface RestaurantPageState {
    targetRestaurants: Restaurant[];
    randomRestaurants: Restaurant[];
    chosenRestaurant: Restaurant | null;
    targetProducts: Product[];
    chosenProduct: Product | null;
}

/** ORDERS PAGE */

export interface OrdersPageState {
    pausedOrders: Order[],
    processOrders: Order[],
    finishedOrders: Order[],
}

/** CoMMUNITY PAGE */

export interface CommunityPageState {
    targetBoArticles: BoArticles[]
}


export interface MemberPageState {
    chosenMember: Member | null;
    chosenMemberBoArticles: BoArticles[];
    chosenSingleBoArticles: BoArticles | null;
    memberFollowers: Follower[];
    memberFollowings: Following[];
}