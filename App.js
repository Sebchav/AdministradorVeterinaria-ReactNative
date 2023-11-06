import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, Modal } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

import Formulario from './components/Formulario';

export default function App() {

  // Hooks 
  const [ modalVisible, setModalVisible ] = useState(false);

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>

      <Text style={styles.titulo}>Administrador de Citas {''}
        <Text style={styles.tituloBold}>Veterinaria</Text>
      </Text>

      <Pressable
        onPress={ ()=> setModalVisible(true) }
        style={styles.btnNuevaCita}
      >
       <Text style={styles.btnTextoNuevaCita}>Nueva Cita</Text>
      </Pressable>

      <Formulario 
        modalVisible={modalVisible}
      
      />
      
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
  }
});
