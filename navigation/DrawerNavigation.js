import { createDrawerNavigator } from "@react-navigation/drawer";

import Clientes from "../pages/Clientes";
import React from "react";

const Drawer = createDrawerNavigator()

export function DrawerNavigation () {
  return (
    <Drawer.Navigator initialRouteName="Clientes">
      <Drawer.Screen name="Clientes" component={Clientes} />
    </Drawer.Navigator>
  )
}
