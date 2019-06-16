import React from 'react';
import Toolbar from './Toolbar';
import { withRouter } from 'react-router-dom'

let ToolbarContainer = ({match, location, ...props}) => {

	let Title = 'Acceuil';
	
	if(location.pathname.indexOf("jobs") === 1) {
		Title = 'Mes reponses';
	} else if (location.pathname.indexOf("asks") === 1) {
		Title = 'Mes demandes';
	}

	let methods = {
		Title,
		...props
	}
	return (
		<Toolbar {...methods} />
	)
}

export default withRouter(ToolbarContainer);