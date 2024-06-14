import axios from 'axios';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    // Extrae el token de la URL cuando el componente se monta
    const searchParams = new URLSearchParams(window.location.search);
    const urlToken = searchParams.get('token');
    if (urlToken) {
      setToken(urlToken); // Almacena el token en el estado si está presente en la URL
    }
  }, []);

  /**
   * handleSendPassword - Función asincrónica para enviar la nueva contraseña al servidor.
   * Envía una solicitud POST al servidor con el token de autenticación y la nueva contraseña.
   * Muestra una alerta de éxito o error basada en la respuesta del servidor.
   */
  const handleSendPassword = async () => {
    try {
      // Envía la solicitud POST al servidor
      const response = await axios.post(
        'https://pos-back-production.up.railway.app/cambiarPassword',
        {
          token: token, // Incluye el token en el cuerpo de la solicitud
          password: password, // Incluye la nueva contraseña en el cuerpo de la solicitud
        },
        {
          headers: {
            'Authorization': `Bearer ${token}` // Añade el token en el encabezado de la solicitud
          }
        }
      );
      console.log(response.data);
      // Muestra una alerta de éxito si la solicitud fue exitosa
      Swal.fire({
        icon: 'success',
        title: 'Contraseña Cambiada exitosamente',
      });
    } catch (error) {
      console.error('Error change password:', error);
      // Muestra una alerta de error si la solicitud falló
      Swal.fire({
        icon: 'error',
        title: 'Error al Cambiar Contraseña',
      });
    }
  };

  /**
  * Función para manejar el cambio en el input de contraseña.
  */
  const handleInputChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  /**
  * Función para alternar la visibilidad de la contraseña.
  */
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 py-12 px-4 sm:px-6 lg:px-8">
  <div className='mx-auto sm:w-96 md:w-1/2 lg:w-1/3 xl:w-1/4'> {/* Ajusta el tamaño del formulario aquí */}
    <div className='mb-4'>
      <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-50">Cambiar contraseña</h2>
      <p className="mt-2 text-center text-sm text-gray-400">
        Ingresa la nueva contraseña que deseas establecer.
      </p>
    </div>
    <form className="bg-white shadow-md rounded-md px-8 pt-6 pb-8 mb-4 w-full h-auto"> {/* Ajusta el tamaño del formulario aquí */}
      <div className="mb-4">
        <label className="block text-gray-700 text-center text-xl font-bold mt-10" htmlFor="password">
          Nueva Contraseña
        </label>
        <div className="relative flex items-center border rounded-lg overflow-hidden md:w-full focus:border-black">
          <input
            className="w-full px-4 py-3 text-gray-900 focus:outline-none placeholder:text-gray-500"
            id="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            value={password}
            onChange={handleInputChange}
          />
          <span className="cursor-pointer" onClick={toggleShowPassword}>
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-slate-950" />
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-4">
        <button
          className="w-full bg-[#ff6b6b] hover:bg-[#ffa500] text-gray-50 rounded p-3"
          type="button"
          onClick={handleSendPassword}
        >
          Cambiar Contraseña
        </button>
      </div>
    </form>
    <p className="text-center text-gray-700 text-xs ">
      ©2024 Mi Empresa. Todos los derechos reservados.
    </p>
  </div>
</div>

  );
};

export default PasswordForm;
