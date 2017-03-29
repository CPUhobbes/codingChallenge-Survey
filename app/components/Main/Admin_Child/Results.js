//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid, Jumbotron} from 'react-bootstrap';
import Utils from '../../Utils/utils';

class Results extends Component{
	constructor(props) {
		super(props);

		this.state = {
			results:{}
		};

  	}
	
	componentWillMount(){
		Utils.getResults().then((results)=>{
			if(results.status === 200){
				//console.log(results.data);
				this.setState({results:results.data});
			}

		})
		.catch((error) => {
			this.setState({results:{}});
		})
	}

	render(){
		//
		const results = this.state.results;

		function displayResults(){
			return (
				<div className="questionResults">
					{results.map((questions, indexQuest) => {
						return (
							<div key={indexQuest}>
								<Jumbotron className="questionBox">
								<div className="questionTitle">{questions.question}</div>
								<Row>
									<Col sm={1}> <div className="answerKey">Results</div></Col>
								</Row>
								<div className="answerList">
									{questions.answers.map((answers, indexAns) =>{
										return(
											<div key={indexAns}>
												<Row>
													<Col sm={8}> {answers.answer}</Col>
													<Col sm={2}> {answers.responses}</Col>
												</Row>
											</div>
										);
									})}
								</div>
								</Jumbotron>
							</div>
						);
					})}
				</div>
			)
		}

		function errorResults(){
			return (
				<div>
					<h1 className="text-center">There Are No Questions</h1>
					<h1 className="text-center"> Please Try Again Later!</h1>
				</div>
			)
		}

		//Conditional Rendering if there are questions avaliable
		function getResults(){
			if(results.length>0){
				return <div>{displayResults()} </div>
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
							<h1 className="text-center">Survey Results</h1>
							<div> {getResults()} </div>
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}

export default Results;