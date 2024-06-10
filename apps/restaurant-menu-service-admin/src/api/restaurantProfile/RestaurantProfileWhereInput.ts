import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { MenuItemListRelationFilter } from "../menuItem/MenuItemListRelationFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type RestaurantProfileWhereInput = {
  address?: StringNullableFilter;
  contactInfo?: StringNullableFilter;
  id?: StringFilter;
  menuItems?: MenuItemListRelationFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
};
