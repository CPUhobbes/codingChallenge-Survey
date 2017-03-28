//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Nav, Navbar, NavItem} from 'react-bootstrap';
import {IndexLinkContainer} from 'react-router-bootstrap';

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
				    
				<Navbar>
					<Navbar.Header>
						<Navbar.Brand>
							Admin Panel
						</Navbar.Brand>
						<Navbar.Toggle />
					</Navbar.Header>
					
					<Navbar.Collapse>
						<Nav>
							<IndexLinkContainer to={"/Admin"} activeHref="active">
								<NavItem eventKey={1} >Results</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to={"/Admin/Add"} >
								<NavItem eventKey={2} >Add Question</NavItem>
							</IndexLinkContainer>
							<IndexLinkContainer to={"/Admin/Delete"} >
								<NavItem eventKey={3} >Delete Question</NavItem>
							</IndexLinkContainer>
						</Nav>
						
					</Navbar.Collapse>

				</Navbar>

				{/*Render component children, important!!*/}
				{this.props.children}
		  	

		  	</div> 
		);
	}
}

export default Home;