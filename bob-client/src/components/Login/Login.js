import React from 'react';
import './Login.scss';
import {Card} from 'antd';

let Login = ({children}) => {
	return (
			<Card style={{ width: 300}}>
				{children}
			</Card>
		);
}

export default Login;