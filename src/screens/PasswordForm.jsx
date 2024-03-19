import React, { useState } from 'react';
import useEmail from '../screens/hooks/useEmail';
import { View, Text, Button,TextInput } from 'react'

const PasswordForm = () => {

  //codifica a partir de aqui victor
  //funcion para envia los datos.
  /*
  //Valores Iniciales
  const INITIAL_STATE = {
    newPassword: '',
  }
  //

  const ConfirmPasswordForm = () => {
    const [dataForm, setDataForm] = useState(INITIAL_STATE);
    const { handleSendNewPassword } = useEmail();

    //Logica para Cambiar la Contraseña
    const getValues = (name, value) => {
      setDataForm({
        ...dataForm,
        [name]: value
      })
    }

    const handleSendPassword = async () => {
      const objectSend = {
        ...dataForm,
      }

      //control de errores para el crear un usuario
      try {
        const response = await handleSendNewPassword(objectSend, token);
        if (response) {
          alert("Contraseña Cambiada Correctamente")
          setDataForm(INITIAL_STATE);
        } else {
          alert("No se cambio Correctamente la Contraseña");
        }
      } catch (error) {
        alert("problema interno del servidor")
      }
      console.log("valor del formulario" + JSON.stringify(objectSend));
    };
    //Aqui Termina
  */

    return (
      <View style={{
        marginTop: 100,
        paddingHorizontal: 25,
      }}>
        <TextInput
          style={{
            marginBottom: 25,
            fontSize: 17,
            borderBottomWidth: 1, // Cambiado de borderWidth
            borderBottomColor: 'red', // Cambiado de borderColor
            height: 40,
            color: '#546574',
            padding: 10,
            borderRadius: 5,
          }}
          placeholder="Ingresar Nueva Contraseña"
          placeholderTextColor="#546574"
          //onChangeText={text => getValues('newPassword', text)}
        />
        <Button> style={{
          backgroundColor: 'red',
          paddingVertical: 12,
          borderRadius: 5,
          alignItems: 'center',
          marginTop: 5,
        }}>
          <Text style={{
            color: '#fff',
            fontSize: 20,
            fontWeight: 'bold',
          }}>Cambiar Contraseña</Text>
        </Button>
      </View >
    )
  };


export default PasswordForm;