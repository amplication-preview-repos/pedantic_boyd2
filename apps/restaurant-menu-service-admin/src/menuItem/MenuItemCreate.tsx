import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantProfileTitle } from "../restaurantProfile/RestaurantProfileTitle";

export const MenuItemCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <BooleanInput label="availability" source="availability" />
        <TextInput label="category" source="category" />
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <NumberInput label="price" source="price" />
        <ReferenceInput
          source="restaurantProfile.id"
          reference="RestaurantProfile"
          label="restaurantProfile"
        >
          <SelectInput optionText={RestaurantProfileTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
