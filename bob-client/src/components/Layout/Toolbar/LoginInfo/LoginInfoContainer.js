import React from 'react';
import LoginInfo from './LoginInfo';

let LoginInfoContainer = (props) => {

	let logout = () => {
		
	}

	let methods = {
		user: {
			firstName: 'Othman',
			lastName: 'EL BANI'
		},
		componentItems: {
			logout: 'Déconnexion'
		},

		logout,
		
		...props
	}
	return (
		<LoginInfo {...methods} />
	)
}

export default LoginInfoContainer;