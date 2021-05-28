import React from "react"
import { Route, Switch } from "react-router-dom"

import AdminRouteList from "./AdminRouteList"
import PublicRoute from './PublicRoute';
import MainAdminLayout from "./../layout/MainAdmin"


export default () => {

	const NoMatch = () => <h1>Oops page not found</h1>
	const Login = () => <h1>Login Component</h1>
	
	

	return (
		<Switch>
			<PublicRoute restricted={true} exact path={["/", "/login", "/defaultPath"]} component={Login} />
			<Route path='/admin/:path?/:path?' exact>
				<MainAdminLayout>
					<Switch>
						<AdminRouteList />
					</Switch>
				</MainAdminLayout>
			</Route>

			<Route render={(props) => <NoMatch {...props} />} />
		</Switch>

	)

}
