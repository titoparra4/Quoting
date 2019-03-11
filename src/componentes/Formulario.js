import React, { Component } from 'react';

class Formulario extends Component {
	//refs are to read the fields of a form
	marcaRef = React.createRef();
	yearRef = React.createRef();
	planBasicoRef = React.createRef();
	planCompletoRef = React.createRef();

	cotizarSeguro = (e) => {
		e.preventDefault();

		//Read the plan
		const plan = this.planBasicoRef.current.checked ? 'basico' : 'completo';

		//Get information
		//console.log(this.marcaRef.current.value);

		//Create object
		const infoAuto = {
			marca: this.marcaRef.current.value,
			year: this.yearRef.current.value,
			plan: plan
		};

		//console.log(infoAuto);
		//Send to the main component

		this.props.cotizarSeguro(infoAuto);

		//Reset Form
		e.currentTarget.reset();
	};

	render() {
		return (
			<form className="cotizar-auto" onSubmit={this.cotizarSeguro}>
				<div className="campo">
					<label>Brand</label>
					<select name="marca" ref={this.marcaRef}>
						<option value="americano">American</option>
						<option value="europeo">European</option>
						<option value="asiatico">Asian</option>
					</select>
				</div>

				<div className="campo">
					<label>Year</label>
					<select name="year" ref={this.yearRef}>
						<option value="2019">2019</option>
						<option value="2018">2018</option>
						<option value="2017">2017</option>
						<option value="2016">2016</option>
						<option value="2015">2015</option>
						<option value="2014">2014</option>
						<option value="2013">2013</option>
						<option value="2012">2012</option>
						<option value="2011">2011</option>
						<option value="2010">2010</option>
						<option value="2009">2009</option>
						<option value="2008">2008</option>
					</select>
				</div>
				<div className="campo">
					<label>Plan:</label>
					<input type="radio" ref={this.planBasicoRef} name="plan" value="basico" /> Basic
					<input type="radio" ref={this.planCompletoRef} name="plan" value="completo" /> Full
				</div>

				<button type="submit" className="boton">
					Quote
				</button>
			</form>
		);
	}
}

export default Formulario;
