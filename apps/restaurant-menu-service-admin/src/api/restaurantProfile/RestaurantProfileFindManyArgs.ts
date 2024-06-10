import { RestaurantProfileWhereInput } from "./RestaurantProfileWhereInput";
import { RestaurantProfileOrderByInput } from "./RestaurantProfileOrderByInput";

export type RestaurantProfileFindManyArgs = {
  where?: RestaurantProfileWhereInput;
  orderBy?: Array<RestaurantProfileOrderByInput>;
  skip?: number;
  take?: number;
};
