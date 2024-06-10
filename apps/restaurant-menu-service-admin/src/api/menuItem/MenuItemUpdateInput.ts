import { RestaurantProfileWhereUniqueInput } from "../restaurantProfile/RestaurantProfileWhereUniqueInput";

export type MenuItemUpdateInput = {
  availability?: boolean | null;
  category?: string | null;
  description?: string | null;
  name?: string | null;
  price?: number | null;
  restaurantProfile?: RestaurantProfileWhereUniqueInput | null;
};
