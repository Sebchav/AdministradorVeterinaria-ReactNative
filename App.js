import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, Modal, FlatList } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Paciente from './components/Paciente';
import Formulario from './components/Formulario';
import InformacionPaciente from './components/InformacionPaciente';

export default function App() {

  // Hooks 
  const [ modalVisible, setModalVisible ] = useState(false);
  const [ pacientes, setPacientes ] = useState([])
  const [ paciente, setPaciente ] = useState({})
  const [ modalPaciente, setModalPaciente] = useState(false);

  const pacienteEditar = id => {
    const pacienteEditar = pacientes.filter(paciente => paciente.id === id);

    setPaciente(pacienteEditar[0]);
  }

  const pacienteEliminar = id => {
    Alert.alert(
      "¿Deseas eliminar este paciente?",
      "Un paciente eliminado no se puede recuperar",
      [
        { text: "Cancelar"},
        { text: "Si, Eliminar", onPress: ()=>{
          const pacientesActualizados = pacientes.filter(pacientesState => pacientesState.id !== id)
          
          setPacientes(pacientesActualizados);
        }}
      ]
    )
  }

  const cerrarModal = ()=>{
    setModalVisible(false)
  }

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={ ()=> setModalVisible(!modalVisible) }
        style={styles.btnNuevaCita}
      >
       <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      {pacientes.length === 0 ? 
        <Text style={styles.noPacientes}>No hay pacientes aún</Text> :
        <FlatList 
          style={styles.listado}
          data={pacientes}
          keyExtractor={(item)=> item.id}
          renderItem={({item})=> {
            return (
                <Paciente 
                  item={item}
                  setModalVisible={setModalVisible}
                  pacienteEditar={pacienteEditar}
                  pacienteEliminar={pacienteEliminar}
                  setModalPaciente={setModalPaciente}
                  setPaciente={setPaciente}
                />
            )
          }}
        />
      }

      {modalVisible && (
          <Formulario 
          cerrarModal={cerrarModal}
          setPacientes={setPacientes}
          pacientes={pacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
      )}
      
      <Modal
        visible={modalPaciente}
        animationType='fade'
      >
        <InformacionPaciente
          paciente={paciente}
          setModalPaciente={setModalPaciente}
          setPaciente={setPaciente}
        />
      </Modal>
      
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F4F6",
    flex: 1
  },
  titulo: {
    textAlign: "center",
    fontSize: 30,
    color: "#374151",
    fontWeight: "600"
  },
  tituloBold: {
    fontWeight: "900",
    color: "#6D28D9"
  },
  btnNuevaCita: {
    backgroundColor: "#6D28D9",
    padding: 15,
    marginTop: 30,
    marginHorizontal: 20,
    borderRadius: 10
  },
  btnTextoNuevaCita: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 18,
    fontWeight: "900",
    textTransform: "uppercase"
  },
  noPacientes: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "600"
  }, 
  listado: {
    marginTop: 50,
    marginHorizontal: 30
  }
});
