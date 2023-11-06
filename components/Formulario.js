import React from 'react'
import { Modal, Text, Button, StyleSheet, View, TextInput, ScrollView } from "react-native"

const Formulario = ({modalVisible}) => {
  return (
    <Modal
        animationType='slide'
        visible={modalVisible}
      > 

        <View style={styles.contenido}>
            <ScrollView>
                <Text
                    style={styles.titulo}
                >Nueva {''}
                    <Text
                        style={styles.tituloBold}
                    >Cita</Text>
                </Text>

                <View
                    style={styles.campo}
                >
                    <Text style={styles.label}>Nombre Paciente</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nombre Paciente'
                        placeholderTextColor={"#666"}
                    />
                </View>

                <View
                    style={styles.campo}
                >
                    <Text style={styles.label}>Nombre Propietario</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Nombre Propietario'
                        placeholderTextColor={"#666"}
                    />
                </View>

                <View
                    style={styles.campo}
                >
                    <Text style={styles.label}>Email Propietario</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Email Propietario'
                        placeholderTextColor={"#666"}
                        keyboardType='email-address'
                    />
                </View>

                <View
                    style={styles.campo}
                >
                    <Text style={styles.label}>Teléfono Propietario</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Teléfono Propietario'
                        placeholderTextColor={"#666"}
                        keyboardType='number-pad'
                    />
                </View>

                <View
                    style={styles.campo}
                >
                    <Text style={styles.label}>Sintomas</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Sintomas Paciente'
                        placeholderTextColor={"#666"}
                        
                    />
                </View>

            </ScrollView>
        </View>
        
      </Modal>
  )
}

const styles = StyleSheet.create({
    contenido: {
        backgroundColor: "#6D28D9",
        flex: 1
    },  
    titulo: {
        fontSize:30,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 30,
        color: "#FFF"
    },
    tituloBold: {
        fontWeight: "900"
    },
    campo:{
        marginTop: 10,
        marginHorizontal: 30,
     
    },
    label: {
        color: "#FFF",
        marginBottom: 10,
        marginTop: 15,
        fontSize: 20,
        fontWeight: "600"
    },
    input: {
        backgroundColor: "#FFF",
        padding: 15,
        borderRadius: 10,
       
    }
})

export default Formulario 