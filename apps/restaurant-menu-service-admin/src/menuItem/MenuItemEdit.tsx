import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RestaurantProfileTitle } from "../restaurantProfile/RestaurantProfileTitle";

export const MenuItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
