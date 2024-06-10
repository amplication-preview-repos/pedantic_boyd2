import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RestaurantProfileWhereUniqueInput } from "../restaurantProfile/RestaurantProfileWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type OrderWhereInput = {
  customer?: StringNullableFilter;
  id?: StringFilter;
  items?: StringNullableFilter;
  restaurantProfile?: RestaurantProfileWhereUniqueInput;
  status?: "Option1";
  totalPrice?: FloatNullableFilter;
};
