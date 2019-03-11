import React, { Component } from 'react';
import Header from './Header';
import Formulario from './Formulario';
import Resumen from './Resumen';
import { obtenerDiferenciaAnio, calcularMarca, obtenerPlan } from '../helper';
import Resultado from './Resultado';

class App extends Component {
	state = {
		resultado: '',
		datos: {}
	};

	cotizarSeguro = (datos) => {
		const { marca, plan, year } = datos;

		//Add a base of 2000
		let resultado = 2000;

		//get the difference of year
		const diferencia = obtenerDiferenciaAnio(year);

		//for each year subtract 3% from the value of the insurance

		resultado -= diferencia * 3 * resultado / 100;

		//American 15%, Asian 5% and European 30% increase to current value

		resultado = calcularMarca(marca) * resultado;

		//The basic plan increases the value by 20% and the complete plan increases the value by 50%

		let incrementoPlan = obtenerPlan(plan);

		resultado = parseFloat(incrementoPlan * resultado).toFixed(2);

		const datosAuto = {
			marcar: marca,
			plan: plan,
			year: year
		};

		this.setState({
			resultado: resultado,
			datos: datosAuto
		});
	};

	render() {
		return (
			<div className="contenedor">
				<Header titulo="Auto insurance quote" />

				<div className="contenedor-formulario">
					<Formulario cotizarSeguro={this.cotizarSeguro} />
					<Resumen datos={this.state.datos} resultado={this.state.resultado} />
					<Resultado resultado={this.state.resultado} />
				</div>
			</div>
		);
	}
}

export default App;
