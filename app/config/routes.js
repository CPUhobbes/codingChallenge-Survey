//PACKAGES
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

//COMPONENTS
import Index from '../components/index';
import Home from '../components/Main/Home';
import ThankYou from '../components/Main/ThankYou'
import Admin from '../components/Main/Admin';
import NotFound from '../components/Error/NotFound';
import SubmitError from '../components/Error/Submit';


const Routes = (props) => ( 
	<Router {...props}>
		<Route path="/" component={Index}>
			<IndexRoute component={Home} />
			<Route path ="/ThankYou" component={ThankYou} />
			<Route path ="/Error" component={SubmitError} />
		</Route>
		<Route path="/Admin" component={Admin} />
		<Route path="*" component={NotFound} />
	</Router>

);

export default Routes;