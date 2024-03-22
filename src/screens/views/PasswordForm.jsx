import axios from 'axios';
import Swal from 'sweetalert2';
import { useState, useEffect } from 'react';

const PasswordForm = () => {
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  // Función para obtener el token de la URL
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const urlToken = searchParams.get('token');
    if (urlToken) {
      setToken(urlToken);
    }
  }, []);

  const handleSendPassword = async () => {
    try {
      const response = await axios.post(
        'http://localhost:3000/cambiarPassword',
        {
          token: token,
          password: password,
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Contraseña Cambiada exitosamente',
      });
    } catch (error) {
      console.error('Error change password:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error al Cambiar Contraseña',
      });
    }
  };

  const handleInputChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

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
              placeholder=""
              value={password}
              onChange={handleInputChange}
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