import React,{useState,useEffect} from "react";
import Pregunta from "./components/Pregunta";

import Formulario from "./components/Formulario";
import ListadoGastos from './components/ListadoGastos';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  // definir el state
  const [presupuesto,setPresupuesto]=useState(0);
  const[restante,setRestante] = useState(0);
  const[mostrarPregunta,setMostrarPregunta] = useState(true);
  const[gastos, setGastos]=useState([]);
  const[gasto, setGasto]=useState({});
  const[crearGasto,setCrearGasto]=useState(false);
  useEffect(()=>{
    if(crearGasto){
      setGastos([
        ...gastos,
        gasto
      ]);
      const presupuestoRestante = restante-gasto.cantidad;
      setRestante(presupuestoRestante);
      setCrearGasto(false);
    }

  },[gasto]);
  // const handlersGastos=gasto=>{
    
  //   setGastos([
  //     ...gastos,
  //     gasto
  //   ])
  // }
  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta?(
            <Pregunta 
            setPresupuesto={setPresupuesto} 
            setRestante={setRestante} 
            setMostrarPregunta={setMostrarPregunta}
            
            />
          ):(
            <div className="row">
            <div className="one-half column">
              <Formulario
                setGasto={setGasto}
                setCrearGasto={setCrearGasto}
              />
            </div>
            <div className="one-half column">
              <ListadoGastos
                gastos={gastos}
              />
              <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
              />
            </div>
          </div>
          )}
          </div>

      </header>
    </div>
  );
}

export default App;
