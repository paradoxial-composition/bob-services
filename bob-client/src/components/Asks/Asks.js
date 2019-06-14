import React from 'react';
import './Asks.scss';
import {Card, Col, Row, Divider} from 'antd';

let Asks = ({componentItems, services}) => {
	let asks = []
	let colGris = {
		xxl: 6,
		xl: 6,
		lg: 8,
		md: 8,
		ms: 12
	}
	services.map((item, index) => {
		asks.push(
			<Col {...colGris} >
				<Card key={index}>
					<p>{componentItems.cardItems.activity} <spacer/> <b>{item.activity}</b></p>
					<p>{componentItems.cardItems.creationDate} <spacer/> <b>{item.creationDate}</b></p>
					<p>{componentItems.cardItems.user} <spacer/> <b>{item.userId}</b></p>
					<p>{componentItems.cardItems.description} <spacer/> <b>{item.description}</b></p>
				</Card>
			</Col>
		)
	})
	return (
			<div>
				<h2>{componentItems.title}</h2>
				<Row>
					<Col offset={10} span={4}>
						<Divider />
					</Col>
				</Row>
				<Row gutter={24} type="flex" justify="start">
					{asks}
				</Row>
			</div>
		);
}

export default Asks;