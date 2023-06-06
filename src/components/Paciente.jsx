import { useState, useEffect } from "react";

const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

const {nombre, propietario, email, fecha, sintomas, id} = paciente;

const handleEliminar = () => {
    const respuesta = confirm('Seguro que deseas eliminar este paciente?')

    if(respuesta == true) {
        eliminarPaciente(id)
    }
}
  return (
    <div className="mx-5 bg-white shadow-md rounded-md px-5 py-10 mb-5">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: <span className="font-normal normal-case">{nombre}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: <span className="font-normal normal-case">{propietario}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        E-mail: <span className="font-normal normal-case">{email}</span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta:{" "}
        <span className="font-normal normal-case">
          {fecha}
        </span>
      </p>

      <p className="font-bold mb-3 text-gray-700 uppercase">
        Síntomas:{" "}
        <span className="font-normal normal-case">
          {sintomas}
        </span>
      </p>

      <div className="flex justify-between mt-10">
        <button onClick={() => setPaciente(paciente)} type="button" className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-md">Editar</button>
        <button onClick={handleEliminar} type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-md">Eliminar</button>
      </div>
    </div>
  );
};

export default Paciente;

