import React, { Fragment } from 'react';
import { revisarPresupuesto } from './helpers';
import PropTypes from 'prop-types';

const ControlPresupuesto = ({ presupuesto, restante }) => {
	return (
		<Fragment>
			<div className='alert alert-primary'> Presupuesto: ${presupuesto}</div>
			<div className={revisarPresupuesto(presupuesto, restante)}>
				Restante: ${restante}
			</div>
		</Fragment>
	);
};

ControlPresupuesto.protoTypes = {
	guardarGasto: PropTypes.func.isRequired,
	guardarCrearGasto: PropTypes.func.isRequired,
};

export default ControlPresupuesto;
