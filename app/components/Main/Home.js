//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Form, Radio, Button, Jumbotron} from 'react-bootstrap';
import Utils from '../Utils/utils';
import {hashHistory} from 'react-router';

class Home extends Component{
	constructor(props) {
		super(props);

		this.state = {
			survey:{
				question:'',
				answers:[],
				id:''
			},
			selection:-1,
			//login:false
		};

		//Bind functions here
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
  	}
	
	componentDidMount(){
		//this.setState({login:this.props.adminLogIn()});

		Utils.getQuestion().then((data)=>{
			let newObj = {
				question:data[0].question,
				answers:data[0].answers,
				id:data[0].id

			}
			this.setState({survey:newObj});
		})
		.catch((error) => {
			let newObj = {
					question:'',
					answers:[],
					id:''

			}
			this.setState({survey:newObj});
		})
		
	}

	componentDidUpdate(prevProps, prevState){
		
	}
	
	handleFormSubmit(event){
		event.preventDefault();
		
		if(this.state.selection>0){
			Utils.submitAnswer(this.state.selection).then(() =>{
				
				Utils.updateIp(this.state.survey.id).then((response) =>{
					if(response.status === 201){
						hashHistory.push('/ThankYou');
					}
					else{
						hashHistory.push('/Error');
					}
				})
			})
		}
	}
	
	handleFormChange(event){
		// console.log(this.state);
		this.setState({selection: parseInt(event.target.id)});
	}

	render(){
		//functions
		const handleFormChange = this.handleFormChange;
		const handleFormSubmit = this.handleFormSubmit;

		//variables
		const question = this.state.survey.question;
		const answers = this.state.survey.answers;
		
		function noQuestions(props){
			return (
				<div>
					<Col sm={12}>
						<h2>Thank you, but all questions have been answered!</h2>
						<h2>Please try again later</h2>
					</Col>
				</div>
			);
		}

		function showQuestions(){
			return (
				<div>
					<Col sm={12}>
						<h2 className="text-center">{question}</h2>
					</Col>
					<Col sm={12}>
						<Form onChange={handleFormChange} onSubmit={handleFormSubmit}>
							{answers.map((val, index) => {
								return (
									<h3 key={index}>
										<Radio  id={val.id} name="radioGroup">
											{val.answer} --- {val.responses}
											{/*<p> {val.answer} --- {val.responses} --- {val.id} </p>*/}
										</Radio>
									</h3> 
								)
							})}
							<div className="text-center">
								<Button type='submit' bsStyle='primary' bsSize="lg"> Submit </Button>
							</div>
						</Form>
					</Col>
				</div>
			);
		}

		//Conditional Rendering if there are questions avaliable
		function displaySurvey(){
			if(question === ''){
				
				return <div>{noQuestions()}</div>
			}
			else{
				return <div>{showQuestions()}</div>
			}
		}
	
		return (
			<div>
				<Grid>
				<Jumbotron>
					<Row>
						<div> {displaySurvey()} </div>
					</Row>
					</Jumbotron>
				</Grid>
      		</div>
		);
	}
}

export default Home;