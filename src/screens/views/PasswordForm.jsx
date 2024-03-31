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

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex">
      <img
        src="https://images.pexels.com/photos/188035/pexels-photo-188035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Imagen de fondo"
        className="absolute -inset-x-0  -inset-y-px w-full h-full object-cover z-0"
      />
      <div className="justify-center items-center p-48 left-80">
      <div className="relative z-full w-full max-w-md bg-gradient-to-br from-gray-400 to-gray-60 p-6 rounded-md shadow-md ">
        <h2 className="text-2xl font-serif mb-5 text-center">Cambiar Contraseña</h2>
        <form >
          <div className="mb-4 relative">
            <label className="block text-gray-700 text-sm font-serif mb-2" htmlFor="password">
              Nueva Contraseña
            </label>
            <div className="flex items-center">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type={showPassword ? 'text' : 'password'}
                placeholder=""
                value={password}
                onChange={handleInputChange}
                style={{ transition: 'all .3s ease' }}
                onFocus={(e) => { e.target.style.boxShadow = '0 0 5px 2px #3b82f6'; e.target.style.transform = 'scale(1.05)' }}
                onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'scale(1.0)' }}
              />
              <span className="ml-2 cursor-pointer" onClick={toggleShowPassword}>
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-slate-950" />
              </span>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-gradient-to-br from-orange-400 to-orange-600 hover:from-orange-300 hover:to-orange-500 text-slate-900 bg-orange-400 bg-opacity-50 text-white font-serif py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 ease-in-out"
              type="button"
              onClick={handleSendPassword}
              onMouseOver={(e) => { e.target.style.boxShadow = '0 0 5px 2px #9f7aea'; e.target.style.transform = 'scale(1.05)' }}
              onMouseOut={(e) => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'scale(1.0)' }}
            >
              Cambiar Contraseña
            </button>
          </div>
        </form>
        <p className="text-center text-gray-700 text-xs ">
          &copy;2024 Mi Empresa. Todos los derechos reservados.
        </p>
      </div>
      </div>
      </div>
  );
};

export default PasswordForm;
