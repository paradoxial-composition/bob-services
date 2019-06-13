import React from 'react';
import Toolbar from './Toolbar';

let ToolbarContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<Toolbar {...methods} />
	)
}

export default ToolbarContainer;