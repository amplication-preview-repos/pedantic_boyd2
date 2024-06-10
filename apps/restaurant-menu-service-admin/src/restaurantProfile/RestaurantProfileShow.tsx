import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { RESTAURANTPROFILE_TITLE_FIELD } from "./RestaurantProfileTitle";

export const RestaurantProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="address" source="address" />
        <TextField label="contactInfo" source="contactInfo" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="MenuItem"
          target="restaurantProfileId"
          label="MenuItems"
        >
          <Datagrid rowClick="show">
            <BooleanField label="availability" source="availability" />
            <TextField label="category" source="category" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="price" source="price" />
            <ReferenceField
              label="restaurantProfile"
              source="restaurantprofile.id"
              reference="RestaurantProfile"
            >
              <TextField source={RESTAURANTPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Order"
          target="restaurantProfileId"
          label="Orders"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="customer" source="customer" />
            <TextField label="ID" source="id" />
            <TextField label="items" source="items" />
            <ReferenceField
              label="restaurantProfile"
              source="restaurantprofile.id"
              reference="RestaurantProfile"
            >
              <TextField source={RESTAURANTPROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <TextField label="totalPrice" source="totalPrice" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
