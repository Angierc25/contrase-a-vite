import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const PasswordForm = (token) => {

  //codifica a partir de aqui victor
  //funcion para envia los datos.
  // Constantes
  const [Password, setPassword] = useState({
    token: '',
    newPassword: '',
  });

  // Metodo Post
  const ChangePassword = async (token) => {
    try {
      const response = await axios.post('http://localhost:3000/cambiarPassword', {
        token: token,
        newPassword: Password.newPassword,
      }, {
        headers: {
          'Authorization': `Bearer ${Password.token}`
        }
      });
      console.log(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Contraseña Cambiada exitosamente',
        showConfirmButton: false,
        timer: 1500,
      });
    } catch (error) {
      console.error('Error change password:', error);

      Swal.fire({
        icon: 'error',
        title: 'Error al Cambiar Contraseña',
        text: 'Hubo un error al cambiar contraseña.',
      });
    }
  };

  // Handler para cambiar el valor del input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPassword((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen" style={{backgroundColor: 'navy', margin: 0, padding: 0, border: 'none'}}>
      <div className="w-full max-w-md bg-gray-200 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-5 text-center">Cambiar Contraseña</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
              Nueva Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="password"
              placeholder="********"
              name='newPassword'
              value={Password.newPassword}
              onChange={e => setPassword({ ...Password, newPassword: e.target.value })}
              style={{ transition: 'all .3s ease' }}
              onFocus={(e) => { e.target.style.boxShadow = '0 0 5px 2px #3b82f6'; e.target.style.transform = 'scale(1.05)' }}
              onBlur={(e) => { e.target.style.boxShadow = 'none'; e.target.style.transform = 'scale(1.0)' }}
            />
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transform transition duration-500 ease-in-out"
              type="button"
              onClick={() => ChangePassword(Password.token)}
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