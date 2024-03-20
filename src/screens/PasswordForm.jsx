import { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const PasswordForm = () => {

  //codifica a partir de aqui victor
  //funcion para envia los datos.
  //Constantes
  const [Password, setPassword] = useState({
    token: '',
    newPassword: '',
  });
  //Metodo Post
  const ChangePassword = async () => {
    try {
      await axios.post('http://localhost:3000/cambiarPassword', Password, {
        headers: {
          'Authorization': `Bearer ${Password.token}`
        }
      });
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
  //

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div className=" inset-10 bg-gray-500 opacity-90">
          <div className="bg-white w-96 p-6 rounded-md shadow-md">
            <h2 className="text-zinc-50">Cambiar Contraseña</h2>
            <form className="car-form bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                  Nueva Contraseña:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name='newPassword'
                  value={setPassword.newPassword}
                />
              </div>

              <div className="flex items-center justify-between mt-4">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={ChangePassword}
                >
                  Cambiar Contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      )
    </div>
  );
};

export default PasswordForm;