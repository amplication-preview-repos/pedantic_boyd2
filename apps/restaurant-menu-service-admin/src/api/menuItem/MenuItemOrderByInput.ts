import { SortOrder } from "../../util/SortOrder";

export type MenuItemOrderByInput = {
  availability?: SortOrder;
  category?: SortOrder;
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  price?: SortOrder;
  restaurantProfileId?: SortOrder;
  updatedAt?: SortOrder;
};
