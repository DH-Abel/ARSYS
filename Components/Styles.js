import { StyleSheet } from "react-native"

const Styles = StyleSheet.create({
  container: {
    fontSize: 100,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 210
  },
  containerCreacion: {
    marginLeft: 10,
    fontSize: 100,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingBottom: 210
  },
  containerClientesDetalle: {
    backgroundColor: 'white',
    paddingVertical: 0,
    paddingBottom: 200,
    paddingBottom: 0,
    marginVertical: 10,
    margin: 20,
    borderBottomColor: 'black',
    borderBottomWidth: 1
  },
  containerBottonEditarEliminar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  btnEditar: {
    backgroundColor: 'lightgreen',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10
  },
  btnEliminar: {
    backgroundColor: 'red',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 10
  },

  btnTexto: {
    fontSize: 17,
    fontWeight: "800"
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
  },
  titulo: {
    fontSize: 70,
    color: 'black',
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 30,
    color: 'black',
    fontWeight: "800"
  },
  tituloDetalle: {
    fontSize: 20,
    color: '#191c1e',
    fontWeight: "800",
    alignItems: 'center',
  },
  detalleClientes: {
    fontSize: 15,
    color: 'gray',
    fontWeight: "100"
  },
  normaltext: {
    fontSize: 20,
    marginTop: 45,
    marginBottom: -100,


  },
  inputs: {
    borderWidth: 1,
    fontSize: 17,
    color: 'black',
    borderColor: 'black',
    width: '95%',
    padding: 10,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#cccccc20'


  },
  buttonLogin: {
    height: 50,
    width: '90%',
    height: 50,
    textAlign: 'center',
    borderRadius: 25,
    alignContent: 'center',
    justifyContent: 'center',
  },
  buttonCancelar: {
    height: '6%',
    width: '24%',
    textAlign: 'center',
    borderRadius: 25,
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#ff86a5',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: 'gray'
  },
  buttonGuardar: {
    height: '6%',
    width: '24%',
    textAlign: 'center',
    borderRadius: 25,
    alignContent: 'right',
    justifyContent: 'center',
    backgroundColor: '#00ff9c',
    paddingTop: -10,
    paddingBottom: 0,
    marginLeft: '75%',
    marginTop: '-10.5%',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: 'gray'

  },
  textobtncancelar: {
    textAlign: 'center'
  },
  btnFormularioClientes: {
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightblue',
    padding: 0,
    marginLeft: '70%',
    height: 50,
    width: 80,
    borderRadius: 10,
    alignItems: 'center'
  },
  button: {
    height: 50,
    width: '90%',
    height: 50,
    textAlign: 'center',
    borderRadius: 25,
    alignContent: 'center',
    justifyContent: 'center'
  },

  profileImage: {
    paddingTop: 100,
    width: 150,
    height: 150,
    margin: 0,
    borderRadius: 100,
  },
  textLog: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center'
  },

  containerLog: {
    width: 150
  },
  Subtitule: {
    fontSize: 40,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flex: 1,
    margin: 20,
    backgroundColor: 'blue',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    height: '25',
    width: '25',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
})
export default Styles