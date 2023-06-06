import { useState, useEffect } from "react";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import Header from "./components/header";

function App() {

  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes'))  ?? []);
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  //   const obtenerLS = () => {
  //     const pacientesLS = ;
  //     setPacientes(pacientesLS)
  //   }

  //   obtenerLS()
  // }, [])
  

  useEffect(() => {
     localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])
  

  const eliminarPaciente = id => {
    const pacientesNow = pacientes.filter(pacienteDelete => {return pacienteDelete.id !== id})
    setPacientes(pacientesNow)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario setPaciente={setPaciente} paciente={paciente} setPacientes={setPacientes} pacientes={pacientes}/>
        <ListadoPacientes setPaciente={setPaciente} pacientes={pacientes} eliminarPaciente={eliminarPaciente}/>
      </div>
    </div>
  );
}

export default App;
