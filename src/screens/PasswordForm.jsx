import React, { useState } from 'react';

const PasswordForm = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  //codifica a partir de aqui victor
  //funcion para envia los datos.

  
  const handleChange = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div className="bg-gray-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center mb-6">
          <img src="" alt= "Logo" className="h-8 w-8" />
        </div>
        <h1 className="text-4xl font-bold mb-10 text-center">Aplicacion react native</h1>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg">
          <label htmlFor="" className="text-xl font-medium mb-2">Nueva Contraseña:</label>
          <input type="" id="" value={''} onChange={handleChange} className="border-2 border-gray-300 rounded-lg p-2 mb-4 w-full" />
          <button type="submit" className="bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600 w-full">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default PasswordForm;