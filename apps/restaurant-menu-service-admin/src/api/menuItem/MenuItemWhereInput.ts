import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { RestaurantProfileWhereUniqueInput } from "../restaurantProfile/RestaurantProfileWhereUniqueInput";

export type MenuItemWhereInput = {
  availability?: BooleanNullableFilter;
  category?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  price?: FloatNullableFilter;
  restaurantProfile?: RestaurantProfileWhereUniqueInput;
};
