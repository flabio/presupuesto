import React from "react";
import Gastos from "./Gastos";
import PropTypes from 'prop-types';

const ListadoGastos = ({ gastos }) => (
  <div className="gastos-realizados">
    <h2>Listado de gastos</h2>
    {gastos.map((gasto) => (
      <Gastos key={gasto.id} gasto={gasto} />
    ))}
  </div>
);
ListadoGastos.propTypes = {
    gastos:PropTypes.array.isRequired
}
export default ListadoGastos;
