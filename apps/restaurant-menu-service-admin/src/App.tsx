import React, { useEffect, useState } from "react";
import { Admin, DataProvider } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { createBrowserHistory as createHistory } from "history";
import { BrowserRouter } from "react-router-dom";
import { RestaurantProfileList } from "./restaurantProfile/RestaurantProfileList";
import { RestaurantProfileCreate } from "./restaurantProfile/RestaurantProfileCreate";
import { RestaurantProfileEdit } from "./restaurantProfile/RestaurantProfileEdit";
import { RestaurantProfileShow } from "./restaurantProfile/RestaurantProfileShow";
import { MenuItemList } from "./menuItem/MenuItemList";
import { MenuItemCreate } from "./menuItem/MenuItemCreate";
import { MenuItemEdit } from "./menuItem/MenuItemEdit";
import { MenuItemShow } from "./menuItem/MenuItemShow";
import { OrderList } from "./order/OrderList";
import { OrderCreate } from "./order/OrderCreate";
import { OrderEdit } from "./order/OrderEdit";
import { OrderShow } from "./order/OrderShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { auth0AuthProvider } from "./auth-provider/ra-auth-auth0";

const history = createHistory();

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: DataProvider) => {
        setDataProvider(() => provider);
      })
      .catch((error: unknown) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Admin
          history={history}
          title={"restaurant-menu-service"}
          dataProvider={dataProvider}
          authProvider={auth0AuthProvider}
          theme={theme}
          dashboard={Dashboard}
          loginPage={Login}
        >
          <Resource
            name="RestaurantProfile"
            list={RestaurantProfileList}
            edit={RestaurantProfileEdit}
            create={RestaurantProfileCreate}
            show={RestaurantProfileShow}
          />
          <Resource
            name="MenuItem"
            list={MenuItemList}
            edit={MenuItemEdit}
            create={MenuItemCreate}
            show={MenuItemShow}
          />
          <Resource
            name="Order"
            list={OrderList}
            edit={OrderEdit}
            create={OrderCreate}
            show={OrderShow}
          />
          <Resource
            name="User"
            list={UserList}
            edit={UserEdit}
            create={UserCreate}
            show={UserShow}
          />
        </Admin>
      </BrowserRouter>
    </div>
  );
};

export default App;
