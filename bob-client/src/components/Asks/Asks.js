import React from 'react';
import './Asks.scss';
import {Card} from 'antd';

let Asks = ({componentItems, services}) => {
	let asks = []
	services.map((item, index) => {
		asks.push(
			<Card key={index} style={{ with: 200}}>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.activity} <spacer/> {item.activity}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.creationDate} <spacer/> {item.creationDate}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.user} <spacer/> {item.userId}</label></div>
					<div style={{display: 'flex'}}><label>{componentItems.cardItems.description} <spacer/> {item.description}</label></div>
				</Card>
		)
	})
	return (
			<div>
				<h3>{componentItems.title}</h3>
				<div style={{ display: 'flex' }}>
					{asks}
				</div>
			</div>
		);
}

export default Asks;