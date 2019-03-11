import React, { Component } from 'react';
import { primeraMayuscula } from '../helper';

class Resumen extends Component {
	mostrarResumen = () => {
		const { marcar, year, plan } = this.props.datos;

		if (!marcar || !year || !plan) return null;

		return (
			<div className="resumen">
				<h2>Summary Quotation</h2>
				<li>Brand: {primeraMayuscula(marcar)}</li>
				<li>Plan: {primeraMayuscula(plan)}</li>
				<li>Year of the car: {year}</li>
			</div>
		);
	};

	render() {
		return <div>{this.mostrarResumen()}</div>;
	}
}
export default Resumen;
