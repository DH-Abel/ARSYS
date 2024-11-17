import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import InicioScreen from './pages/InicioScreen';
import Clientes from './navigation/StackNavigation';



class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.log('Error capturado:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <Text>Ocurrió un error. Revisa la consola.</Text>;
    }
    return this.props.children;
  }
}
const Stack = createStackNavigator();
export default function App() {
  return (
    <ErrorBoundary>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="InicioScreen" component={InicioScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ErrorBoundary>
  );
}
