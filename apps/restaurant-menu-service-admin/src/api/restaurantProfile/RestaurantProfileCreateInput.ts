import { MenuItemCreateNestedManyWithoutRestaurantProfilesInput } from "./MenuItemCreateNestedManyWithoutRestaurantProfilesInput";
import { OrderCreateNestedManyWithoutRestaurantProfilesInput } from "./OrderCreateNestedManyWithoutRestaurantProfilesInput";

export type RestaurantProfileCreateInput = {
  address?: string | null;
  contactInfo?: string | null;
  menuItems?: MenuItemCreateNestedManyWithoutRestaurantProfilesInput;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutRestaurantProfilesInput;
};
