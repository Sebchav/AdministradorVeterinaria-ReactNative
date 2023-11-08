import React, { useState, useEffect } from 'react'
import { Modal, Text, Button, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from "react-native"
import DateTimePicker from 'react-native-ui-datepicker';

const Formulario = ({modalVisible, setPacientes, pacientes, paciente: pacienteObj, setPaciente: setPacienteApp, cerrarModal}) => {

    const [paciente, setPaciente] = useState("");
    const [id, setId] = useState("")
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [date, setDate] = useState(new Date());
    const [sintomas, setSintomas] = useState("");
    
    useEffect(()=>{
        console.log("Formulario Listo")
        if(Object.keys(pacienteObj).length > 0){
            setId(pacienteObj.id);
            setPaciente(pacienteObj.paciente);
            setPropietario(pacienteObj.propietario);
            setEmail(pacienteObj.email);
            setTelefono(pacienteObj.telefono);
            setDate(pacienteObj.date);
            setSintomas(pacienteObj.sintomas);
        }
        console.log(pacienteObj)
    }, [pacienteObj])

    const handleCita = ()=>{
        //Validar
        if([paciente, propietario, telefono, email, date, sintomas].includes("")){
            Alert.alert(
                "Error",
                "Todos los campos son obligatorios"
            )

            return
        }

        //Revisar si es un registro nuevo o edición
        const nuevoPaciente = {
            paciente,
            propietario,
            email,
            date,
            sintomas,
            telefono
        }

        if(id){
            //Editando
            nuevoPaciente.id = id;

            const pacientesActualizados = pacientes.map(pacienteState => pacienteState.id === nuevoPaciente.id ? nuevoPaciente : pacienteState)

            setPacientes(pacientesActualizados);
            setPaciente({})
            
        }else{
            //Nuevo Registro
            nuevoPaciente.id = Date.now();
            setPacientes([...pacientes, nuevoPaciente])
        }

        cerrarModal()

        setPaciente("");
        setPropietario("");
        setEmail("");
        setTelefono("");
        setDate(new Date());
        setSintomas("");
    }

  return (
    <Modal
        animationType='slide'
        visible={modalVisible}
      > 

        <View style={styles.contenido}>
            <ScrollView>
                <Text
                    style={styles.titulo}
                >{pacienteObj.id ? "Editar" : "Nueva"} {''}
                    <Text
                        style={styles.tituloBold}
                    >Cita</Text>
                </Text>

               <Pressable 
                style={styles.btnCancelar}
                onPress={()=> {
                    cerrarModal()
                    setId("")
                    setPacienteApp({})
                    setPaciente("");
                    setPropietario("");
                    setEmail("");
                    setTelefono("");
                    setDate(new Date());
                    setSintomas("");
                }}
                >
                    <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
               </Pressable> 

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
                        <DateTimePicker 
                            value={date}
                            
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

                <Pressable 
                    style={styles.btnNuevaCita}
                    onPress={handleCita}
                >
                    <Text style={styles.btnNuevaCitaTexto}>{pacienteObj.id ? "Editar Paciente" : "Agregar Paciente"} Paciente</Text>
               </Pressable> 

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
    btnCancelar:{
        marginVertical: 30,
        backgroundColor: "#5827A4",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,    
    },
    btnCancelarTexto: {
        color: "#FFF",
        textAlign: "center",
        fontWeight: "900",
        fontSize: 16,
        textTransform: 'uppercase'
    },
    campo:{
        marginTop: 10,
        marginHorizontal: 30
     
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
    },
    btnNuevaCita: {
        marginVertical: 50,
        backgroundColor: "#F59E0B",
        paddingVertical: 15,
        marginHorizontal: 30,
        borderRadius: 10
    },
    btnNuevaCitaTexto: {
        textAlign: "center",
        color: "#5827A4",
        textTransform: "uppercase",
        fontWeight: "900",
        fontSize: 16
    }
})

export default Formulario 