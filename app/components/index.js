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
			  	<Link to="/Admin"><h5 className="text-right">Admin Login</h5></Link>
				<h1 className="text-center">Coding-Challenge-Survey</h1>
				

				{/*Render component children, important!!*/}
				{this.props.children}
	
		  	</div> 
		);
  	}
}


export default Index;