//Import Packages
import React, { Component} from 'react';
import {Link} from 'react-router';

class Index extends Component {

	constructor(props){
		super(props);

		this.state={


		}
		//Bind functions here

	}

	render() {
		

		return(
		  	<div>
				<h1 className="text-center">Coding-Challenge-Survey</h1>
				<Link to="/Admin"><h4 className="text-right">Admin Login</h4></Link>

				{/*Render component children, important!!*/}
				{this.props.children}
	
		  	</div> 
		);
  	}
}


export default Index;