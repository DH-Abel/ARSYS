import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MyStack from './navigation/StackNavigation';
import { Home } from './pages/Home';
import Clientes from './pages/Clientes';
import { DrawerNavigation } from './navigation/DrawerNavigation';

export default function App() {
  return (
    <View style={styles.container}>
     <Clientes/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
