import React from 'react';
import Toolbar from './Toolbar';
import { withRouter } from 'react-router-dom'

let ToolbarContainer = ({match, location, ...props}) => {

	let Title = 'Dashboard';
	
	if(location.pathname.indexOf("regions") === 1) {
		Title = 'Régions';
	} else if (location.pathname.indexOf("audits") === 1) {
		Title = 'Audits';
	} else if (location.pathname.indexOf("establishments") === 1) {
		Title = 'Etablissements';
	} else if (location.pathname.indexOf("users") === 1) {
		Title = 'Utilisateurs';
	} else if (location.pathname.indexOf("reports") === 1) {
		Title = 'Raports';
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