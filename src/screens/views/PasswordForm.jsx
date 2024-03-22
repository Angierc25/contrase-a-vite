import axios from 'axios';
import Swal from 'sweetalert2';
//Importaciones 
import { useState } from 'react'
import useEmail from '../hooks/useEmail';
//Impotacion de Localizar Tokem
import { useLocation } from 'react-router-dom';
//

const PasswordForm = () => {

  //codifica a partir de aqui victor
  //funcion para envia los datos.
  //Valores Iniciales
  const INITIAL_STATE = {
    password: '',
  }
  //

  // Metodo Post
  const [dataForm, setDataForm] = useState(INITIAL_STATE);
  const { handleSendNewPassword } = useEmail();
  const location = useLocation(); // Obtener la ubicación actual del navegador

  //Metodo Localizar Tokem
  // Obtener el token del URL
  const obtenerTokenDeURL = () => {
    const searchParams = new URLSearchParams(location.search);
    return searchParams.get('token');
  };
  //

  const token = obtenerTokenDeURL(); // Obtener el token del URL

  //Logica para Cambiar la Contraseña
  const getValues = (name, value) => {
    setDataForm({
      ...dataForm,
      [name]: value
    })
  }

  const handleSendPassword = async () => {

    try {
      const response = await handleSendNewPassword(dataForm.password, token);
      if (response) {
        alert("Contraseña Cambiada Correctamente")
        setDataForm(INITIAL_STATE);
      } else {
        alert("No se cambio Correctamente la Contraseña");
        console.log(Error)
      }
    } catch (error) {
      console.error("Error:", error);
      alert("problema interno del servidor")
    }
  };
  //Aqui Termina


  return (
    <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: 'navy', margin: 0, padding: 0, border: 'none' }}>
      <div className="w-full max-w-md bg-gray-200 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Cambiar Contraseña</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Nueva Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              name='password'
              defaultValue={dataForm.password}
              onChange={(e) => getValues("password", e.target.value)}
              style={{ transition: 'all .3s ease' }}
              onFocus={(e) => { e.target.style.boxShadow = '0 0 5px 2px #3b82f6'; e.target.style.transform = 'scale(1.05)' }}
              onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'scale(1.0)' }}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 ease-in-out"
              type="button"
              onClick={handleSendPassword}
              onMouseOver={(e) => { e.target.style.boxShadow = '0 0 5px 2px #9f7aea'; e.target.style.transform = 'scale(1.05)' }}
              onMouseOut={(e) => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'scale(1.0)' }}
            >
              Cambiar Contraseña
            </button>
          </div>
        </form>
        <p className="text-center text-gray-500 text-xs mt-3">
          &copy;2024 Mi Empresa. Todos los derechos reservados.
        </p>
      </div>
    </div>
  );
};

export default PasswordForm;