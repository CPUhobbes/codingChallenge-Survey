import React, { Component } from 'react';
import {Link} from 'react-router';

class Submit extends Component {
	render() {
		return (
			<div>
				<h2>There was a problem submitting your answer</h2>
				<h3><Link to="/">Click here </Link>to return to the main page</h3>
			</div>
		);
	}
}
export default Submit;
