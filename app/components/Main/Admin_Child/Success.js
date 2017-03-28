//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Form, Radio, Button} from 'react-bootstrap';

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
		console.log(this.props.location);
		
		return (
			
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h2 className="text-center">Success</h2>
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}

export default Home;