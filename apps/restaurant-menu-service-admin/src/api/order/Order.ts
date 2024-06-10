import { RestaurantProfile } from "../restaurantProfile/RestaurantProfile";

export type Order = {
  createdAt: Date;
  customer: string | null;
  id: string;
  items: string | null;
  restaurantProfile?: RestaurantProfile | null;
  status?: "Option1" | null;
  totalPrice: number | null;
  updatedAt: Date;
};
