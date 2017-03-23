//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid} from 'react-bootstrap';

class Home extends Component{
	constructor(props) {
		super(props);

		this.state = {
			
		};

		//Bind functions here

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
							<h2 className="text-center">Welcome</h2>
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}

export default Home;