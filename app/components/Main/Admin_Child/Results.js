//Import Packages
import React, { Component } from 'react';
import { Row, Col, Grid} from 'react-bootstrap';
import Utils from '../../Utils/utils';

class Home extends Component{
	constructor(props) {
		super(props);

		this.state = {
			results:{}
		};

		//Bind functions here
		//this.handleFormChange = this.handleFormChange.bind(this);
		//this.handleFormSubmit = this.handleFormSubmit.bind(this);
		

  	}
	
	componentWillMount(){
		Utils.getResults().then((results)=>{
			if(results.status === 200){
				console.log(results.data);
				this.setState({results:results.data});
			}

		})
	}

	componentDidUpdate(prevProps, prevState){
		
	}


	
	handleFormSubmit(event){
		
	}
	
	handleFormChange(event){
		
	}

	render(){
		function Results(props){
			let results = props.results;
			return (
				<div>
					{results.map((questions, indexQuest) => {
						return (
							<div key={indexQuest}>
								<h2>{questions.question}</h2>
								{questions.answers.map((answers, indexAns) =>{
									return(
										<div key={indexAns}>
											<h4>{answers.answer} --- {answers.responses}</h4>
										</div>
									);
								})}
							</div>
						);
					})}
				</div>
			)
		}

		function Error(){
			return (
				<div>
					<h1 className="text-center">There Was an Error Getting the Results </h1>
					<h1 className="text-center"> Please Try Again Later!</h1>
				</div>
			)
		}

		function GetResults(props){
			if(props.results.length>0){
				return <Results results={props.results} />
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
							<h2 className="text-center">Survey Results</h2>
							<GetResults results={this.state.results} />
						</Col>
					</Row>
				</Grid>
      		</div>
		);
	}
}

export default Home;