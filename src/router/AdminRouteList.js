import React from "react"
import { Route, Switch } from "react-router-dom"
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./../Dashboard"

const NoMatch = () => <h1>Oops page not found</h1>


const routes = [
	{
		path: ["/", "/admin/dashboard"],
		exact: true,
		Component: Dashboard,
	},
]

const index = () => (
	<Switch>
		{routes.map(({ path, exact, Component }) => (
			<PrivateRoute path={path} component={Component} key={path} exact={exact} render={(props) => (
				<Component {...props} />
			)} />
		))}
		<Route render={(props) => <NoMatch {...props} />} />
	</Switch>
)


export default index

