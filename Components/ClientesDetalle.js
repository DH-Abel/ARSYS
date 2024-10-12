import React from "react";
import { Pressable, Text, View, Alert } from "react-native";
import Styles from "./Styles";

export default clientesDetalle = ({ 
    item,
    setModalVisible,
    setCliente,
    clienteEditar,
    clienteEliminar,
    setModalInformacion
}) => {
    const { idCliente, nombre, apellido, direccion, docType, documento } = item
    return (
        <Pressable onPress={()=>{
            setModalInformacion(true)
            setCliente(item)
            }}>
        <View style={Styles.containerClientesDetalle}>
            <Text style={Styles.tituloDetalle}>{nombre} {apellido}</Text>
            <Text style={Styles.detalleClientes}>Direccion: {direccion}</Text>
            <Text style={Styles.detalleClientes}>{docType} {documento}</Text>
            <Text style={Styles.detalleClientes}></Text>
            <Text>{idCliente}</Text>
            <View style={Styles.containerBottonEditarEliminar}>
                <Pressable
                    style={Styles.btnEditar}
                    onPress={() => {
                        setModalVisible(true)
                        clienteEditar(idCliente)
                    }}>
                    <Text style={Styles.btnTexto}>Editar</Text>
                </Pressable>
           

                <Pressable
                    style={Styles.btnEliminar}
                    onPress={() => {
                        clienteEliminar(idCliente)
                    }}>
                    <Text style={Styles.btnTexto}>Eliminar</Text>
                </Pressable>
            </View>
        </View>
        </Pressable>

    )
}