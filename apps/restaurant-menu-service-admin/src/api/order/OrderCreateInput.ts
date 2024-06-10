import { RestaurantProfileWhereUniqueInput } from "../restaurantProfile/RestaurantProfileWhereUniqueInput";

export type OrderCreateInput = {
  customer?: string | null;
  items?: string | null;
  restaurantProfile?: RestaurantProfileWhereUniqueInput | null;
  status?: "Option1" | null;
  totalPrice?: number | null;
};
