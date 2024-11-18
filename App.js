import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import MyStack from './navigation/StackNavigation';

import Test from './pages/test';


const Stack = createStackNavigator();
export default function App() {
  return (
    
      <NavigationContainer>
        <MyStack />
      </NavigationContainer>
 
  );
}
