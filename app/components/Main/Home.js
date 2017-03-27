//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Form, FormGroup, Radio, RadioGroup} from 'react-bootstrap';
import Utils from '../Utils/utils';

class Home extends Component{
	constructor(props) {
		super(props);

		this.state = {
			question:'',
			answers:[],
			selection:-1

		};
		this.handleFormChange = this.handleFormChange.bind(this);
		//Bind functions here

  	}
	
	componentWillMount(){
		Utils.getQuestion().then((data)=>{
			let newObj = {
				question:data.question,
				answers:data.answers,

			}
			this.setState(newObj);
		});
	}

	componentDidUpdate(prevProps, prevState){
		
	}


	
	handleFormSubmit(event){

	}
	
	handleFormChange(event){
		this.setState({selection: parseInt(event.target.id)});
	}

	render(){
		let question = this.state.question;
		let answers = this.state.answers;
		
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
								<Form onChange={this.handleFormChange}>
								
								
									{answers.map((val, index) => {
										return (
											<Radio key={index} id={val.id} name="groupOptions">
												{val.answer}
												{/*<p> {val.answer} --- {val.responses} --- {val.id} </p>*/}
											</Radio>
										)
									})}
									
								
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