import { createStackNavigator } from "@react-navigation/stack";
import Clientes from "../pages/Clientes";
import InicioScreen from "../pages/InicioScreen"; // Importación correcta


const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName="InicioScreen">
      <Stack.Screen name="InicioScreen" component={InicioScreen} />
    
    </Stack.Navigator>
  );
}
