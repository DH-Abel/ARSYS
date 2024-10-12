import { createStackNavigator } from "@react-navigation/stack"
import { DrawerNavigation } from "./DrawerNavigation"
import Clientes from "../pages/Clientes"
import { Home } from "../pages/Home";
import { NavigationContainer } from "@react-navigation/native"


const Stack = createStackNavigator()

export default function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        
        <Stack.Screen name="Home" component={Home}
        />
       
      </Stack.Navigator>
    </NavigationContainer>
  )
}