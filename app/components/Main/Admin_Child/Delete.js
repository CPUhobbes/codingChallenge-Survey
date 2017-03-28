//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Form,Checkbox, Button, FormGroup, Jumbotron} from 'react-bootstrap';
import Utils from '../../Utils/utils';
import {hashHistory} from 'react-router';

class Delete extends Component{
	constructor(props) {
		super(props);

		this.state = {
			results:{},
			status:[]
		};

		//Bind functions here
		this.handleFormChange = this.handleFormChange.bind(this);
		this.handleFormSubmit = this.handleFormSubmit.bind(this);
  	}
	
	componentDidMount(){
		Utils.getResults().then((results)=>{
			if(results.status === 200){
				this.setState({results:results.data});
				let tempArr = new Array(results.data.length)
				tempArr.fill(false);
				this.setState({status: tempArr})
			}

		})
	}

	componentDidUpdate(prevProps, prevState){
		
	}

	handleFormSubmit(event){
		event.preventDefault();
		this.state.status.forEach((val, index)=>{
			if(val){
				 Utils.deleteQuestion(this.state.results[index].id).then((response) =>{
					if(response.status === 202){
						hashHistory.push('/Admin/Success');
					}
					else{
						hashHistory.push('/Error');
					}
				 });
			}
		})
	}
	
	handleFormChange(event){
		let tempArr = this.state.status;
		tempArr[parseInt(event.target.id)] = !tempArr[parseInt(event.target.id)];
		this.setState({status:tempArr});
	}

	render(){
		let results = this.state.results;

		function questions(){
			return (
				<div>
					<FormGroup>
					{results.map((questions, indexQuest) => {
						return (
							<h3 key={indexQuest}> 
								<Checkbox id={indexQuest.toString()} >
									{questions.question}
								</Checkbox>
							</h3>
						);
					})}
					</FormGroup>
				</div>
			)
		}

		function errorResults(){
			return (
				<div>
					<h1 className="text-center">There Are No Questions </h1>
					<h1 className="text-center"> Please Try Again Later!</h1>
				</div>
			)
		}

		//Conditional Rendering if there are questions avaliable
		function getQuestions(){
			if(results.length>0){
				return <div>{questions()} </div>
			}
			else{
				return <div>{errorResults()} </div>
			}
		}

		return (
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<div>
								<h1 className="text-center">Delete Questions</h1>
								<Form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
									<Jumbotron>
										<div>{getQuestions()} </div>
										<div className="text-center buttonMargin">
											<Button type='submit' bsStyle='primary' bsSize='lg'> Submit </Button>
										</div>
									</Jumbotron>
								</Form>
							</div>
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}

export default Delete;