import React from "react";
import { Text,SafeAreaView, Pressable } from "react-native";
import Styles from "./Styles";

export default ClienteInformacion = ({cliente,setModalInformacion,setCliente})=>{
    return(
        <SafeAreaView>
            <Text>Informacion del cliente</Text>
            <Text>nombre: {cliente.nombre}</Text>
            <Text>Apellido: {cliente.apellido}</Text>
            <Text>{cliente.docType}: {cliente.documento}</Text>
            <Text>Direccion: {cliente.direccion}</Text>
          

            <Pressable style={Styles.btnEliminar} onPress={()=>{
                setModalInformacion(false)
                setCliente ({}) //Con esto se borra el state del paciente al abrir el modal con la informacion
            }}>
                <Text style={Styles.btnTexto}>Cerrar</Text>
            </Pressable>
        </SafeAreaView>
    )
}