import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
const { width } = Dimensions.get('window');

const InicioScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { width: width * 0.8 }]}
      >
        <Text style={styles.buttonText}>Pedidos</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: width * 0.8 }]}>
        <Text style={styles.buttonText}>Cobranza</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, { width: width * 0.8 }]}>
        <Text style={styles.buttonText}>Consulta de productos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { width: width * 0.8 }]}
        onPress={() => {
          navigation.navigate('Clientes');
        }}
      >
        <Text style={styles.buttonText}>Consulta de clientes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    height: 100,
    justifyContent: 'center'

  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    
  },
});

export default InicioScreen;
