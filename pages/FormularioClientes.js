import React, { useState, useEffect } from 'react';
import { Text, Modal, Pressable, SafeAreaView, ScrollView, TextInput, Alert } from 'react-native'
import Styles from '../Components/Styles';
import { Picker } from '@react-native-picker/picker';


export default FormularioClientes = ({
  modalVisible,
  cerrarModal,
  clientes,
  setClientes,
  cliente,
  setCliente
}) => {
  const [idCliente, setIdCliente] = useState('');
  const [docType, setDocType] = useState('Cedula');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('')
  const [documento, setDocumento] = useState('')
  const [direccion, setDireccion] = useState('')



  useEffect(() => {
    if (Object.keys(cliente).length > 0) {
      setIdCliente(cliente.idCliente)
      setNombre(cliente.nombre)
      setApellido(cliente.apellido)
      setDireccion(cliente.direccion)
      setDocumento(cliente.documento)
      setDocType(cliente.docType)

    }
  }, [cliente])  //En los corchetes se ejecuta cuando lo que este dentro del array cambie


  const validarCliente = () => {

    setDocType('Cedula')
    if ([docType, nombre, apellido, documento, direccion].includes('')) {
      Alert.alert('Error', 'Llena todos los campos')
      return
    }
    const guardarCliente = {
      docType,
      nombre,
      apellido,
      documento,
      direccion
    }

    if (idCliente) {
      guardarCliente.idCliente = idCliente

      const clientesActualizados = clientes.map(clienteState =>
        clienteState.idCliente === guardarCliente.idCliente ? guardarCliente : clienteState)
      setClientes(clientesActualizados)
      setCliente({})
      
    } else {
      guardarCliente.idCliente = Date.now()
      setClientes([...clientes, guardarCliente])

    }

    cerrarModal()
    setNombre('')
    setApellido('')
    setDocumento('')
    setDireccion('')


  }

  return (
    <Modal style={Styles.modalView}
      animationType='slide'
      transparent={false}
      visible={modalVisible}

    >

      <SafeAreaView style={Styles.containerCreacion}>
        <Pressable style={Styles.buttonCancelar}
          onPress={() => {
            setIdCliente ('')
            cerrarModal(false)
            setNombre('')
            setApellido('')
            setDocumento('')
            setDireccion('')
            setDocType('Cedula')
            setCliente({})
          }}
        >
          <Text style={Styles.textobtncancelar}> CANCELAR</Text>
        </Pressable>
        <Pressable style={Styles.buttonGuardar}>
          
          <Text style={Styles.textobtncancelar}
            onPress={validarCliente}>GUARDAR</Text>
        </Pressable>
        <ScrollView Styles={{ marginTop: 100 }}>

          <Text style={Styles.subtitle}>{cliente.idCliente ? 'Edicion de clientes' : 'Creacion de clientes'}</Text>
          <TextInput style={Styles.inputs} placeholder='Nombre' placeholderTextColor="#cccccc95"
            value={nombre}
            onChangeText={setNombre} />

          <TextInput style={[Styles.inputs, { marginBottom: 10 }]} placeholder='Apellido' placeholderTextColor="#cccccc95"
            value={apellido}
            onChangeText={setApellido} />

          <Text style={Styles.normaltext} >Tipo de documento</Text>


          <Picker itemStyle={{
            textAlign: 'right', justifycontent: 'center', marginBottom: 0, marginTop: 30, height: 120, width: 180, marginLeft: 190
          }}
            selectedValue={docType}
            onValueChange={(itemValue, itemIndex) =>
              setDocType(itemValue)
            }>
            <Picker.Item label="Cedula" value='Cedula' />
            <Picker.Item label="RNC" value='RNC' />
          </Picker>



          <TextInput style={Styles.inputs} placeholder="Documento" placeholderTextColor="#cccccc95"
            value={documento}
            onChangeText={setDocumento} />
          <TextInput style={[Styles.inputs, { height: 75 }]} placeholder='Direccion' placeholderTextColor="#cccccc95"
            multiline={true}
            numberOfLines={3}
            value={direccion}
            onChangeText={setDireccion} />




        </ScrollView>
      </SafeAreaView>
    </Modal>


  )
}