import React from 'react';
import LoginInfo from './LoginInfo';

let LoginInfoContainer = (props) => {


	let currentUser= JSON.parse(localStorage.getItem('user')).user;

	let methods = {

		user: {
			firstName: currentUser.firstName,
			lastName: currentUser.lastName
		},
		componentItems: {
			logout: 'Déconnexion'
		},
		
		...props
	}
	return (
		<LoginInfo {...methods} />
	)
}

export default LoginInfoContainer;