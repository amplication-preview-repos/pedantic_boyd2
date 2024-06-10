import { MenuItemUpdateManyWithoutRestaurantProfilesInput } from "./MenuItemUpdateManyWithoutRestaurantProfilesInput";
import { OrderUpdateManyWithoutRestaurantProfilesInput } from "./OrderUpdateManyWithoutRestaurantProfilesInput";

export type RestaurantProfileUpdateInput = {
  address?: string | null;
  contactInfo?: string | null;
  menuItems?: MenuItemUpdateManyWithoutRestaurantProfilesInput;
  name?: string | null;
  orders?: OrderUpdateManyWithoutRestaurantProfilesInput;
};
