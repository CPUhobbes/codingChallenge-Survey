//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Form, Radio, Button} from 'react-bootstrap';
import Utils from '../Utils/utils';
import {hashHistory} from 'react-router';

class Home extends Component{
	constructor(props) {
		super(props);

		this.state = {
			survey:{
				question:'',
				answers:[],
			},
			selection:-1

		};

		//Bind functions here
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
		

  	}
	
	componentWillMount(){
		Utils.getQuestion().then((data)=>{
			let newObj = {
				question:data[0].question,
				answers:data[0].answers,

			}
			this.setState({survey:newObj});
		});
	}

	componentDidUpdate(prevProps, prevState){
		
	}


	
	handleFormSubmit(event){
		event.preventDefault();
		console.log(this.state.selection);
		Utils.submitAnswer(this.state.selection).then((response) =>{
			if(response.status === 201){
				hashHistory.push('/ThankYou');
			}
			else{
				hashHistory.push('/Error');
			}
		})
	}
	
	handleFormChange(event){
		this.setState({selection: parseInt(event.target.id)});
	}

	render(){
		let question = this.state.survey.question;
		let answers = this.state.survey.answers;
		return (
			
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h2 className="text-center">Welcome</h2>
						</Col>
						<Row>
							<Col sm={12}>
								<h2 className="text-center">{question}</h2>
							</Col>
							<Col sm={12}>
								<Form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
								
								
									{answers.map((val, index) => {
										return (
											<Radio key={index} id={val.id} name="radioGroup">
												{val.answer} --- {val.responses}
												{/*<p> {val.answer} --- {val.responses} --- {val.id} </p>*/}
											</Radio>
										)
									})}
									
									<Button type='submit' bsStyle='primary'> Submit </Button>
								</Form>
								
							</Col>
						</Row>

					</Row>
				</Grid>
      		</div>
		);
	}
}

export default Home;