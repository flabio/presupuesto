import React, { useState } from "react";
import Error from './Error';
import shortid from 'shortid';
import PropTypes from 'prop-types';

const Formulario = ({setGasto,setCrearGasto}) => {
    const [error, setError]=useState(false);
    const[nombre,setNombre]=useState('');
    const[cantidad,setCantidad]=useState(0);
    
    //
    const handleSubmit =e=>{
        e.preventDefault();
        //validar
        if(cantidad<1 || isNaN(cantidad) || nombre.trim()==="" || nombre===null){
            setError(true);
            return;
        }
        //construir el gasto
        const gasto={
            nombre,
            cantidad,
            id:shortid.generate()
        }
        
        //pasar el gatos al componente principal
        setGasto(gasto)
        setCrearGasto(true)
        
        //resetear el form
        setCantidad(0)
        setNombre('');
        setError(false)
    }
  return (
    <form onSubmit={handleSubmit} >
      <h2>Agrega tus gastos aquí</h2>
     {error ?<Error error="Los campos son requerido o Presupuesto incorrecto"/>:null}
      <div className="campo">
        <label>Nombre Gastos</label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={e=>setNombre(e.target.value)}

        />
      </div>
      <div className="campo">
        <label>Cantidad Gastos</label>
        <input 
            type="number" 
            className="u-full-width" 
            placeholder="Ej. 300"
            value={cantidad}
            onChange={e=>setCantidad(parseInt(e.target.value,10))} />
      </div>
      <button type="submit" className="button-primary u-full-width">
        Agregar Gasto
      </button>
    </form>
  );
};
Formulario.propTypes={
    setGasto:PropTypes.func.isRequired,
    setCrearGasto:PropTypes.func.isRequired
}
export default Formulario;
