import { RestaurantProfile } from "../restaurantProfile/RestaurantProfile";

export type MenuItem = {
  availability: boolean | null;
  category: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  price: number | null;
  restaurantProfile?: RestaurantProfile | null;
  updatedAt: Date;
};
