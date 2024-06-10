import { RestaurantProfile as TRestaurantProfile } from "../api/restaurantProfile/RestaurantProfile";

export const RESTAURANTPROFILE_TITLE_FIELD = "name";

export const RestaurantProfileTitle = (record: TRestaurantProfile): string => {
  return record.name?.toString() || String(record.id);
};
