import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Vehicles from './pages/Vehicles'

function routes() {
	return (
		<BrowserRouter>
			<Route component={Login} path="/" exact />
			<Route component={Vehicles} path="/vehicles" />
		</BrowserRouter>
	)
}

export default routes;