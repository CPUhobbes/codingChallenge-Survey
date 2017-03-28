//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Form,Checkbox, Button, FormGroup} from 'react-bootstrap';
import Utils from '../../Utils/utils';
import {hashHistory} from 'react-router';

class Home extends Component{
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
	
	componentWillMount(){
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
		let questions = this.state.results;

		function Questions(props){
			let results = props.state.results;
			return (
				<div>
					<FormGroup>
					{results.map((questions, indexQuest) => {
						return (
							<div key={indexQuest}>
								<Checkbox id={indexQuest.toString()} checked={props.state.status[indexQuest]} onChange={()=>{}}>
									{questions.question}
								</Checkbox>
							</div>
						);
					})}
					</FormGroup>
				</div>
			)
		}

		function Error(){
			return (
				<div>
					<h1 className="text-center">There Was an Error Getting the Questions </h1>
					<h1 className="text-center"> Please Try Again Later!</h1>
				</div>
			)
		}

		function GetQuestions(props){
			if(props.state.results.length>0){
				return <Questions state={props.state} />
			}
			else{
				return <Error />
			}
		}
		return (
			
			<div>
				<Grid>
					<Row>
						<Col sm={12}>
							<h2>Delete Questions</h2>
							<Form onChange={this.handleFormChange} onSubmit={this.handleFormSubmit}>
								<GetQuestions state={this.state} />
								<Button type='submit' bsStyle='primary'> Submit </Button>
							</Form>
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}

export default Home;