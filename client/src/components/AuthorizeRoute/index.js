import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom"

export class AuthorizeRoute extends Component {
	render() {

		const redirectUrl = `/?redirectUrl=${encodeURI(window.location.href)}`
		const {component: AuthorizedComponent, userLoggedIn, ...rest} = this.props

		return (
			<Route {...rest}
			       render={renderProps => {
				       if (userLoggedIn) {
					       return <AuthorizedComponent {...renderProps} />
				       } else {
					       return <Redirect to={redirectUrl}/>
				       }
			       }}
			/>)


	}
}
