import Paciente from "./Paciente";

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {
  
  return (

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll mb-3">
    {pacientes == 0 ? (
      <>
      <h2 className="font-black text-3xl text-center">No hay pacientes para mostrar</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Comienza agregando pacientes{" "}
        <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
      </p>

      </>
      
    ) : (
      
     <>
     <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
      <p className="text-xl mt-5 mb-10 text-center">
        Administra tus{" "}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
      </p>

      { pacientes.map( (paciente) => <Paciente eliminarPaciente={eliminarPaciente} setPaciente={setPaciente} key={paciente.id} paciente={paciente}/>) }

     </> 
      )}
      

      
    </div>
  );
};

export default ListadoPacientes;
