import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Test from './pages/test';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Test">
          <Stack.Screen name="Test" component={Test} />
        </Stack.Navigator>
      </NavigationContainer>
        
    </View>
  );
}
