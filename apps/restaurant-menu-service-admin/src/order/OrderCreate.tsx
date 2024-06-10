import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { RestaurantProfileTitle } from "../restaurantProfile/RestaurantProfileTitle";

export const OrderCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="customer" source="customer" />
        <TextInput label="items" source="items" />
        <ReferenceInput
          source="restaurantProfile.id"
          reference="RestaurantProfile"
          label="restaurantProfile"
        >
          <SelectInput optionText={RestaurantProfileTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="totalPrice" source="totalPrice" />
      </SimpleForm>
    </Create>
  );
};
