import React, { Component } from 'react';
import "./Dice.css";

class Dice extends Component {
	constructor(props){
		super();
		this.state = { ...props }
		this.lancerDe = this.lancerDe.bind(this);
	}

	lancerDe(){
		let result = this.state.result + 1;
		this.setState({ result: result})
	}
	render() {
		return <div className='dice'>
		<div 
		onClick={this.lancerDe}>{this.state.result}
		</div>
		</div>;
	}
}

export default Dice;
