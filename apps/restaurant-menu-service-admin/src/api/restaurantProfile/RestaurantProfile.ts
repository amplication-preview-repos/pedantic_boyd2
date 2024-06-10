import { MenuItem } from "../menuItem/MenuItem";
import { Order } from "../order/Order";

export type RestaurantProfile = {
  address: string | null;
  contactInfo: string | null;
  createdAt: Date;
  id: string;
  menuItems?: Array<MenuItem>;
  name: string | null;
  orders?: Array<Order>;
  updatedAt: Date;
};
