import React, { Fragment, useState } from "react";
import Error from './Error';
import PropTypes from 'prop-types';


const Pregunta = ({setPresupuesto,setRestante,setMostrarPregunta}) => {
  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const definirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };
  // submit para definir presupuesto
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validar
    if(cantidad<1 || isNaN(cantidad)){
      setError(true);
      return;
    }
    setError(false);
    setRestante(cantidad);
    setPresupuesto(cantidad);
    setMostrarPregunta(false);

    // si se pasa la validacion
  };
  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error?<Error error="El Presupuesto es incorrecto" />:null}
      
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          className="u-full-width"
          placeholder="Coloca tu presupuesto"
          onChange={definirPresupuesto}
        />
        <button type="submit" className="button-primary u-full-width">
          Definir presupuesto
        </button>
      </form>
    </Fragment>
  );
};

Pregunta.propTypes = {
  setPresupuesto:PropTypes.func.isRequired,
  setRestante:PropTypes.func.isRequired,
  setMostrarPregunta:PropTypes.func.isRequired,
}

export default Pregunta;
