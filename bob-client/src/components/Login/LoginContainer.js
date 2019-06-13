import React from 'react';
import Login from './Login';

let LoginContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<Login {...methods} />
	)
}

export default LoginContainer;