//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Form, Radio, Button} from 'react-bootstrap';
import Utils from '../Utils/utils';

class Home extends Component{
	constructor(props) {
		super(props);

		this.state = {

		};

		//Bind functions here
		//this.handleFormChange = this.handleFormChange.bind(this);
		//this.handleFormSubmit = this.handleFormSubmit.bind(this);
		

  	}
	
	componentWillMount(){
		
	}

	componentDidUpdate(prevProps, prevState){
		
	}


	
	handleFormSubmit(event){
		
	}
	
	handleFormChange(event){
		
	}

	render(){
		
		
		return (
			
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h2 className="text-center">Thank You For Your Submission!</h2>
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}

export default Home;