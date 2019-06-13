import React from 'react';
import './Login.scss';
import {Card} from 'antd';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

let Login = () => {
	return (
			<Card style={{ width: 300}}>
				{/* <LoginForm /> */}
				<RegisterForm />
			</Card>
		);
}

export default Login;