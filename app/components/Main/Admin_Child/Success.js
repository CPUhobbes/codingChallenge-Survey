//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Form, Radio, Button} from 'react-bootstrap';

class Success extends Component{
	constructor(props) {
		super(props);

		this.state = {

		};
  	}

	render(){
		//console.log(this.props.location);
		
		return (
			
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h2 className="text-center">Operation was a Success</h2>
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}

export default Success;