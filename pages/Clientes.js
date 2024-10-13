import React, { useState } from 'react';
import { Text, Modal, Pressable, SafeAreaView, FlatList, Alert } from 'react-native'
import Styles from '../Components/Styles';
import ClientesDetalle from '../Components/ClientesDetalle';
import FormularioClientes from './FormularioClientes';
import ClienteInformacion from '../Components/ClienteInformacion';

const Clientes = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const [modalInformacion, setModalInformacion] = useState(false)
  const [clientes, setClientes] = useState([])
  const [cliente, setCliente] = useState({})

  const clienteEditar = idCliente => {
    const clienteEditar = clientes.filter(cliente => cliente.idCliente === idCliente)
    setCliente(clienteEditar[0])
  }



  const clienteEliminar = idCliente => {
    const clienteEliminado = clientes.filter(clienteState => clienteState.idCliente === idCliente)
    Alert.alert(
      'Seguro deseas eliminar?',
      'Clientes eliminados no se pueden recuperar',
      [
        { text: 'Cancelar' },
        {
          text: 'Si, eliminar', onPress: () => {
            const ClientesEliminados = clientes.filter(
              clientesState => clientesState.idCliente !== idCliente)
            setClientes(ClientesEliminados)
          },
        }
      ]
    )

  }
const cerrarModal = ()=>{
  setModalVisible(false)
}
  return (
    <SafeAreaView style={Styles.containerCreacion}>
      <Text style={Styles.titulo}>CLIENTES</Text>
      <Pressable style={Styles.btnFormularioClientes} onPress={() => {
        setModalVisible(true)
      }}>
        <Text style={{ fontSize: 40 }}>+</Text>
      </Pressable>

      {clientes.length === 0 ?
        <Text style={Styles.tituloDetalle}>No hay Clientes, puedes agregarlos arriba a la derecha (+)</Text> :


        <FlatList style={{ marginBottom: 100, paddingBottom: 100 }}
          data={clientes}
          keyExtractor={(item) => item.idCliente}
          renderItem={({ item }) => {

            return (
              <Pressable onPress={() => { setModalInformacion(true) }}>
                <ClientesDetalle
                  item={item}
                  setModalVisible={setModalVisible}
                  setCliente={setCliente}
                  clienteEditar={clienteEditar}
                  clienteEliminar={clienteEliminar}
                  setModalInformacion={setModalInformacion} />
              </Pressable>
            )
          }}
        />}
      {modalVisible && (
        <FormularioClientes
        cerrarModal={cerrarModal}
          clientes={clientes}
          setClientes={setClientes}
          cliente={cliente}
          setCliente={setCliente}
        />
      )}

      
      <Modal  //Con esto se abre el modal con la informacion, dando clic en el cliente
        visible={modalInformacion}
        animationType='fade'>
        <ClienteInformacion
          cliente={cliente}
          setModalInformacion={setModalInformacion}
          setCliente={setCliente} />

      </Modal>

    </SafeAreaView>
  )
}


export default Clientes