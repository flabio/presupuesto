import React,{Fragment} from 'react';
import {revisarPresupueto} from '../helper/helpers';
import PropTypes from 'prop-types';


const ControlPresupuesto = ({presupuesto,restante}) => {
    return ( 
        <Fragment>
            <div className="alert alert-primary">
               Presupuesto:${presupuesto}
            </div>
            <div className={revisarPresupueto(presupuesto,restante)}>
              Restante: ${restante}

            </div>

        </Fragment>
     );
}
 ControlPresupuesto.propTypes = {
   presupuesto:PropTypes.number.isRequired,
   restante:PropTypes.number.isRequired
 }
export default ControlPresupuesto;
