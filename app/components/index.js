//Import Packages
import React, { Component} from 'react';
import {Link} from 'react-router';
import { Row, Col, Grid, Form, Radio, Button, Modal, HelpBlock, FormGroup, ControlLabel, FormControl} from 'react-bootstrap';
import {hashHistory} from 'react-router';

class Index extends Component {

	constructor(props){
		super(props);

		this.state={
			modal:{
				showModal:false,
				enable:true,
			},
			message:"",
			login: false,
			failedLogin:false,
			user:"",
			pass:"",
			adminCred:{user:"admin", pass:"pass"}


		}
		//Bind functions here
		this.triggerModal = this.triggerModal.bind(this);
		this.loginSubmitHandler = this.loginSubmitHandler.bind(this);
		this.loginFormHandler = this.loginFormHandler.bind(this);
		this.getLogInStatus = this.getLogInStatus.bind(this);
	}


	componentDidUpdate(prevProps, prevState) {

		//Check to see if password message needs updating
		if(prevState.failedLogin !== this.state.failedLogin) {
			if(this.state.failedLogin){
				this.setState({message:"Login Error"});
			}
			else{
				this.setState({message:""});
			}
		}
	}

	getLogInStatus(){
  		return this.state.login;
  	}

	loginSubmitHandler(event){
		event.preventDefault();
		this.setState({failedLogin:true});

		if(this.state.user===this.state.adminCred.user && this.state.pass === this.state.adminCred.pass){
			hashHistory.push({
				pathname: '/Admin',
				state: {login:this.state.login }
			})
		}
		else{
			console.log("no")
		}

	}

	loginFormHandler(event){
		let newState = {};
    	newState[event.target.id] = event.target.value;
    	this.setState(newState);
	}




	triggerModal(){
  		let modalState = {showModal:!this.state.modal.showModal, enable:true};

  		//Reset modal message states
  		this.setState({message:""});
  		this.setState({failedLogin:false});

  		if(this.state.modal.enable){
  			this.setState({modal: modalState});
  		} 		
  	}

	render() {
		let message ="error";

		return(
		  	<div>
			  	<h5 className="text-right"><a href="#" onClick={this.triggerModal}> Admin Log In </a></h5>
			  	{/*<Link to="/Admin"><h5 className="text-right">Admin Login</h5></Link>*/}
				<h1 className="text-center">Coding-Challenge-Survey</h1>
				
			{/* -- Modal -- */}
			
			    <Modal show={this.state.modal.showModal} onHide={this.triggerModal} >
			      <Modal.Header closeButton>
			        <Modal.Title>Log In to Admin Panel</Modal.Title>
			      </Modal.Header>

			      <Modal.Body>
			        <Form onSubmit={this.loginSubmitHandler} onChange={this.loginFormHandler} >
			        	<FormGroup>
			        		<ControlLabel >Username</ControlLabel>
			        	 	<FormControl type="text" id="user" placeholder="Username" />
			        	</FormGroup>
						<FormGroup>
							<ControlLabel>Password</ControlLabel>
							<FormControl type="password" id="pass" placeholder="Password"/>
						</FormGroup>

						<div className="text-center">
							<FormGroup validationState="error">
								<HelpBlock><h2>{this.state.message}</h2></HelpBlock>
							</FormGroup>
						</div>
						<Row>
							<div className="text-center">
								<Button bsStyle="success" bsSize="large" type="submit">Go!</Button>
							</div>
				    	</Row>
					</Form>
				
			      </Modal.Body>
			    </Modal>

				{/*Render component children, important!!*/}
				{React.cloneElement(this.props.children, {
			    	adminLogIn:this.getLogInStatus
			    })}
	
		  	</div> 
		);
  	}
}


export default Index;