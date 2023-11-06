import React, { useState } from 'react'
import { Modal, Text, Button, StyleSheet, View, TextInput, ScrollView } from "react-native"
import DatePicker from '@dietime/react-native-date-picker';

const Formulario = ({modalVisible}) => {

    const [paciente, setPaciente] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [date, setDate] = useState(new Date());
    const [sintomas, setSintomas] = useState("");

    console.log(paciente)
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
                        value={paciente}
                        onChangeText={setPaciente}
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
                        value={propietario}
                        onChangeText={setPropietario}
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
                        value={email}
                        onChangeText={setEmail}
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
                        value={telefono}
                        onChangeText={setTelefono}
                        maxLength={10}
                    />
                </View>

                <View
                    style={styles.campo}
                >
                    <Text style={styles.label}>Fecha Alta</Text>

                    <View style={styles.fechaContenedor}>
                        <DatePicker
                           value={date}
                           onChange={(value) => setDate(value)}
                           format="yyyy-mm-dd"
                        />
                    </View>
                </View>

                <View
                    style={styles.campo}
                >
                    <Text style={styles.label}>Sintomas</Text>
                    <TextInput 
                        style={styles.input}
                        placeholder='Sintomas Paciente'
                        placeholderTextColor={"#666"}
                        value={sintomas}
                        onChangeText={setSintomas}
                        multiline={true}
                        numberOfLines={4}
                        textAlignVertical='top'
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
       
    },
    fechaContenedor: {
        backgroundColor: "#FFF"
    }
})

export default Formulario 