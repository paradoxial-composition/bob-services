import React from 'react';
import './Login.scss';
import {Card, Col, Row} from 'antd';

let Login = ({children}) => {
	return (
		<Row align="middle">
			<Col push={9}>
				<Card style={{ width: 300}}>
					{children}
				</Card>
			</Col>
		</Row>
		);
}

export default Login;