//PACKAGES
import React from 'react';
import {Router, Route, IndexRoute} from 'react-router';

//COMPONENTS

//User
import Index from '../components/index';
import Home from '../components/Main/Home';
import ThankYou from '../components/Main/ThankYou'

//Admin
import Admin from '../components/Main/Admin';
import AdminResults from '../components/Main/Admin_Child/Results';
import AdminAdd from '../components/Main/Admin_Child/Add';
import AdminDelete from '../components/Main/Admin_Child/Delete';
import AdminSuccess from '../components/Main/Admin_Child/Success';

//Errors
import NotFound from '../components/Error/NotFound';
import SubmitError from '../components/Error/Submit';


const Routes = (props) => ( 
	<Router {...props}>
		<Route path="/" component={Index}>
			<IndexRoute component={Home} />
			<Route path ="/ThankYou" component={ThankYou} />
			<Route path ="/Error" component={SubmitError} />
		</Route>
		<Route path="/Admin" component={Admin} >
			<IndexRoute component={AdminResults} />
			<Route path ="/Admin/Add" component={AdminAdd} />
			<Route path ="/Admin/Delete" component={AdminDelete} />
			<Route path ="/Admin/Success" component={AdminSuccess} />
		</Route>
		<Route path="*" component={NotFound} />
	</Router>
);

export default Routes;