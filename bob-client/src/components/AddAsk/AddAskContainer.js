import React from 'react';
import AddAsk from './AddAsk';

let AddAskContainer = (props) => {
	let methods = {
		...props
	}
	return (
		<AddAsk {...methods} />
	)
}

export default AddAskContainer;